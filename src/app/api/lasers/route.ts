import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const manufacturer = searchParams.get('manufacturer');
    const searchTerm = searchParams.get('search');
    const power = searchParams.get('power');
    const wavelength = searchParams.get('wavelength');
    const type = searchParams.get('type');
    const cooling = searchParams.get('cooling');
    const modulation = searchParams.get('modulation');
    const application = searchParams.get('application');
    const pulse = searchParams.get('pulse');
    const stability = searchParams.get('stability');
    const limit = parseInt(searchParams.get('limit') || '100');
    const where: any = {};
    const andConditions: any[] = [];
    // Command-based filters
    if (manufacturer) {
        andConditions.push({
            manufacturer: {
                name: { contains: manufacturer, mode: 'insensitive' }
            }
        });
    }

    if (power) {
        const powerNum = parseFloat(power);
        if (!isNaN(powerNum)) {
            andConditions.push({
                power_output_w: {
                    gte: powerNum * 0.8,
                    lte: powerNum * 1.2
                }
            });
        }
    }

    if (wavelength) {
        const wlNum = parseFloat(wavelength);
        if (!isNaN(wlNum)) {
            andConditions.push({
                wavelength_specs: {
                    wavelength_base_nm: {
                        gte: wlNum - 10,
                        lte: wlNum + 10
                    }
                }
            });
        }
    }

    if (type) {
        andConditions.push({
            laser_type: { contains: type, mode: 'insensitive' }
        });
    }

    if (cooling) {
        andConditions.push({
            cooling_method: { contains: cooling, mode: 'insensitive' }
        });
    }

    if (modulation) {
        andConditions.push({
            modulation_type: { contains: modulation, mode: 'insensitive' }
        });
    }

    if (application) {
        andConditions.push({
            application: { contains: application, mode: 'insensitive' }
        });
    }

    if (pulse === 'true') {
        andConditions.push({
            pulse_specs: {
                isNot: null
            }
        });
    }

    if (stability === 'true') {
        andConditions.push({
            stability_specs: {
                isNot: null
            }
        });
    }

    // Regular search term
    if (searchTerm) {
        andConditions.push({
            OR: [
                { model_name: { contains: searchTerm, mode: 'insensitive' } },
                { notes: { contains: searchTerm, mode: 'insensitive' } },
                { manufacturer: { name: { contains: searchTerm, mode: 'insensitive' } } }
            ]
        });
    }

    if (andConditions.length > 0) {
        where.AND = andConditions;
    }

    try {
        let lasers = await prisma.lasers.findMany({
            where,
            take: limit,
            include: {
                manufacturer: {
                    select: {
                        name: true,
                        country: true
                    }
                },
                wavelength_specs: true,
                pulse_specs: true,
                environmental_specs: true,
                stability_specs: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // Sort by relevance ONLY if specific search criteria are provided
        // Otherwise keep newest first (created_at desc)
        if ((power || wavelength) && lasers.length > 0) {
            const powerNum = power ? parseFloat(power) : null;
            const wlNum = wavelength ? parseFloat(wavelength) : null;

            lasers = lasers.sort((a, b) => {
                let scoreA = 0;
                let scoreB = 0;

                if (powerNum && a.power_output_w && b.power_output_w) {
                    const diffA = Math.abs(Number(a.power_output_w) - powerNum);
                    const diffB = Math.abs(Number(b.power_output_w) - powerNum);
                    scoreA += (1 / (diffA + 1)) * 100;
                    scoreB += (1 / (diffB + 1)) * 100;
                }

                if (wlNum && a.wavelength_specs && b.wavelength_specs) {
                    const diffA = Math.abs(Number(a.wavelength_specs.wavelength_base_nm) - wlNum);
                    const diffB = Math.abs(Number(b.wavelength_specs.wavelength_base_nm) - wlNum);
                    scoreA += (1 / (diffA + 1)) * 100;
                    scoreB += (1 / (diffB + 1)) * 100;
                }

                return scoreB - scoreA;
            });
        }

        console.log(`Fetched ${lasers.length} lasers with filters:`, {
            manufacturer, searchTerm, power, wavelength, type, cooling, modulation, application, pulse, stability
        });

        return NextResponse.json(lasers);
    } catch (error) {
        console.error('Error fetching lasers:', error);
        return NextResponse.json({ error: 'Failed to fetch lasers' }, { status: 500 });
    }
}