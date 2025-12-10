import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import styles from "./lasersMenu.module.sass";

interface LasersMenuProps {
    limit?: number;
    manufacturer?: string;
    searchTerm?: string;
}

export default async function LasersMenu({
    limit = 10,
    manufacturer,
    searchTerm
}: LasersMenuProps) {
    const where: any = {};

    if (manufacturer) {
        where.manufacturer = {
            name: manufacturer
        };
    }

    if (searchTerm) {
        where.OR = [
            { model_name: { contains: searchTerm, mode: 'insensitive' } },
            { notes: { contains: searchTerm, mode: 'insensitive' } }
        ];
    }

    const lasers = await prisma.lasers.findMany({
        where,
        take: limit,
        include: {
            manufacturer: {
                select: {
                    name: true,
                    country: true
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    });

    const base = process.env.NEXT_PUBLIC_BASE_URL || '';

    return (
        <div className={styles.grid}>
            {lasers.map((laser: any) => (
                <Link
                    key={laser.id}
                    href={`${base}/lasers/${laser.id}`}
                    className={styles.card}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.title}>
                            {laser.model_name}
                        </h3>

                        <p className={styles.manufacturer}>
                            {laser.manufacturer.name}
                            {laser.manufacturer.country && ` (${laser.manufacturer.country})`}
                        </p>

                        <div className={styles.specs}>
                            <p>
                                <span className={styles.label}>Wavelength:</span>{' '}
                                {laser.wavelength_nominal_nm?.toString() ||
                                    `${laser.wavelength_min_nm}-${laser.wavelength_max_nm}`} nm
                            </p>

                            {laser.power_mw && (
                                <p>
                                    <span className={styles.label}>Power:</span>{' '}
                                    {parseFloat(laser.power_mw.toString())} mW
                                </p>
                            )}

                            <p>
                                <span className={styles.label}>Type:</span>{' '}
                                {laser.pulse_type || 'N/A'}
                            </p>

                            {laser.cooling && (
                                <p>
                                    <span className={styles.label}>Cooling:</span>{' '}
                                    {laser.cooling}
                                </p>
                            )}
                        </div>

                        {laser.notes && (
                            <p className={styles.notes}>
                                {laser.notes}
                            </p>
                        )}
                    </div>
                </Link>
            ))}

            {lasers.length === 0 && (
                <div className={styles.empty}>
                    No lasers found
                </div>
            )}
        </div>
    );
}