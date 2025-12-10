import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Clear existing data (in correct order to handle foreign keys)
    console.log('🧹 Clearing existing data...');
    await prisma.pulse_specs.deleteMany();
    await prisma.environmental_specs.deleteMany();
    await prisma.stability_specs.deleteMany();
    await prisma.optical_specs.deleteMany();
    await prisma.wavelength_specs.deleteMany();
    await prisma.lasers.deleteMany();
    await prisma.manufacturers.deleteMany();

    console.log('✅ Existing data cleared');

    // Seed Manufacturers
    console.log('📦 Seeding manufacturers...');
    const manufacturers = await Promise.all([
        prisma.manufacturers.create({
            data: {
                name: 'Coherent Inc.',
                country: 'USA',
                website: 'https://www.coherent.com',
                contact_email: 'sales@coherent.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'IPG Photonics',
                country: 'USA',
                website: 'https://www.ipgphotonics.com',
                contact_email: 'info@ipgphotonics.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'TRUMPF Laser',
                country: 'Germany',
                website: 'https://www.trumpf.com',
                contact_email: 'laser@trumpf.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'Spectra-Physics',
                country: 'USA',
                website: 'https://www.spectra-physics.com',
                contact_email: 'contact@spectra-physics.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'Thorlabs',
                country: 'USA',
                website: 'https://www.thorlabs.com',
                contact_email: 'sales@thorlabs.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'Laser Quantum',
                country: 'UK',
                website: 'https://www.laserquantum.com',
                contact_email: 'info@laserquantum.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'EKSPLA',
                country: 'Lithuania',
                website: 'https://www.ekspla.com',
                contact_email: 'sales@ekspla.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
        prisma.manufacturers.create({
            data: {
                name: 'Newport Corporation',
                country: 'USA',
                website: 'https://www.newport.com',
                contact_email: 'support@newport.com',
                created_at: new Date(),
                updated_at: new Date(),
            },
        }),
    ]);

    console.log(`✅ Created ${manufacturers.length} manufacturers`);

    // Seed Lasers with all specifications
    console.log('🔬 Seeding lasers with specifications...');

    // 1. High-Power Fiber Laser (IPG)
    const laser1 = await prisma.lasers.create({
        data: {
            model_name: 'YLR-1000-SM',
            manufacturer_id: manufacturers[1].id,
            laser_type: 'Fiber',
            modulation_type: 'CW',
            cooling_method: 'Water',
            is_single_mode: true,
            power_output_w: new Decimal('1000'),
            power_consumption_w: new Decimal('3500'),
            application: 'Industrial cutting and welding',
            notes: 'High-power single-mode fiber laser for precision manufacturing',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser1.id,
            wavelength_base_nm: new Decimal('1064'),
            wavelength_tolerance_nm: new Decimal('0.5'),
            bandwidth_nm: new Decimal('0.1'),
            wavelength_stability_nm_per_c: new Decimal('0.01'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser1.id,
            beam_divergence_mrad: new Decimal('0.5'),
            beam_quality_m2: new Decimal('1.1'),
            aperture_mm: new Decimal('10'),
            numerical_aperture: new Decimal('0.06'),
            polarization: 'Linear',
            polarization_ratio_db: new Decimal('20'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser1.id,
            power_stability_percent: new Decimal('1'),
            pointing_stability_urad: new Decimal('10'),
            temperature_stability_c: new Decimal('0.05'),
            warmup_time_min: new Decimal('5'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser1.id,
            operating_temp_min_c: new Decimal('15'),
            operating_temp_max_c: new Decimal('35'),
            storage_temp_min_c: new Decimal('-10'),
            storage_temp_max_c: new Decimal('60'),
            humidity_max_percent: new Decimal('80'),
            protection_class: 'IP54',
            created_at: new Date(),
        },
    });

    // 2. Pulsed Nd:YAG Laser (Coherent)
    const laser2 = await prisma.lasers.create({
        data: {
            model_name: 'Astrella',
            manufacturer_id: manufacturers[0].id,
            laser_type: 'Nd:YAG',
            modulation_type: 'Pulsed',
            cooling_method: 'Water',
            is_single_mode: false,
            power_output_w: new Decimal('7'),
            power_consumption_w: new Decimal('2000'),
            application: 'Ultrafast spectroscopy, micromachining',
            notes: 'Ti:Sapphire amplifier system with high pulse energy',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser2.id,
            wavelength_base_nm: new Decimal('800'),
            wavelength_tolerance_nm: new Decimal('5'),
            bandwidth_nm: new Decimal('20'),
            fwhm_nm: new Decimal('10'),
            wavelength_tuning_range: '750-850 nm',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser2.id,
            beam_divergence_mrad: new Decimal('1.2'),
            beam_quality_m2: new Decimal('1.3'),
            aperture_mm: new Decimal('8'),
            polarization: 'Horizontal',
            polarization_ratio_db: new Decimal('100'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser2.id,
            power_stability_percent: new Decimal('2'),
            pointing_stability_urad: new Decimal('20'),
            warmup_time_min: new Decimal('30'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser2.id,
            operating_temp_min_c: new Decimal('18'),
            operating_temp_max_c: new Decimal('28'),
            storage_temp_min_c: new Decimal('5'),
            storage_temp_max_c: new Decimal('40'),
            humidity_max_percent: new Decimal('70'),
            protection_class: 'IP20',
            created_at: new Date(),
        },
    });

    await prisma.pulse_specs.create({
        data: {
            laser_id: laser2.id,
            pulse_width_ns: new Decimal('0.000035'), // 35 femtoseconds
            pulse_energy_j: new Decimal('0.007'),
            rep_rate_hz: new Decimal('1000'),
            duty_cycle_percent: new Decimal('0.0035'),
            rise_time_ns: new Decimal('0.00001'),
            fall_time_ns: new Decimal('0.00001'),
            created_at: new Date(),
        },
    });

    // 3. Green DPSS Laser (Laser Quantum)
    const laser3 = await prisma.lasers.create({
        data: {
            model_name: 'Opus 532',
            manufacturer_id: manufacturers[5].id,
            laser_type: 'DPSS',
            modulation_type: 'CW',
            cooling_method: 'Air',
            is_single_mode: true,
            power_output_w: new Decimal('2'),
            power_consumption_w: new Decimal('110'),
            application: 'Confocal microscopy, fluorescence excitation',
            notes: 'Compact green laser with excellent beam quality',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser3.id,
            wavelength_base_nm: new Decimal('532'),
            wavelength_tolerance_nm: new Decimal('0.2'),
            bandwidth_nm: new Decimal('0.05'),
            wavelength_stability_nm_per_c: new Decimal('0.005'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser3.id,
            beam_divergence_mrad: new Decimal('0.8'),
            beam_quality_m2: new Decimal('1.05'),
            aperture_mm: new Decimal('2.5'),
            polarization: 'Vertical',
            polarization_ratio_db: new Decimal('500'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser3.id,
            power_stability_percent: new Decimal('0.5'),
            pointing_stability_urad: new Decimal('5'),
            temperature_stability_c: new Decimal('0.1'),
            warmup_time_min: new Decimal('10'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser3.id,
            operating_temp_min_c: new Decimal('18'),
            operating_temp_max_c: new Decimal('30'),
            storage_temp_min_c: new Decimal('0'),
            storage_temp_max_c: new Decimal('50'),
            humidity_max_percent: new Decimal('80'),
            protection_class: 'IP40',
            created_at: new Date(),
        },
    });

    // 4. CO2 Laser (TRUMPF)
    const laser4 = await prisma.lasers.create({
        data: {
            model_name: 'TruFlow 3200',
            manufacturer_id: manufacturers[2].id,
            laser_type: 'CO2',
            modulation_type: 'CW',
            cooling_method: 'Water',
            is_single_mode: false,
            power_output_w: new Decimal('3200'),
            power_consumption_w: new Decimal('32000'),
            application: 'Heavy industry cutting, welding, engraving',
            notes: 'High-power CO2 laser for thick material processing',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser4.id,
            wavelength_base_nm: new Decimal('10600'),
            wavelength_tolerance_nm: new Decimal('10'),
            bandwidth_nm: new Decimal('2'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser4.id,
            beam_divergence_mrad: new Decimal('5'),
            beam_quality_m2: new Decimal('8'),
            aperture_mm: new Decimal('40'),
            polarization: 'Linear',
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser4.id,
            power_stability_percent: new Decimal('3'),
            warmup_time_min: new Decimal('15'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser4.id,
            operating_temp_min_c: new Decimal('10'),
            operating_temp_max_c: new Decimal('40'),
            storage_temp_min_c: new Decimal('-10'),
            storage_temp_max_c: new Decimal('60'),
            humidity_max_percent: new Decimal('70'),
            protection_class: 'IP54',
            created_at: new Date(),
        },
    });

    // 5. Diode Laser (Thorlabs)
    const laser5 = await prisma.lasers.create({
        data: {
            model_name: 'LP980-SF15',
            manufacturer_id: manufacturers[4].id,
            laser_type: 'Diode',
            modulation_type: 'CW',
            cooling_method: 'TEC',
            is_single_mode: true,
            power_output_w: new Decimal('0.015'),
            power_consumption_w: new Decimal('5'),
            application: 'Spectroscopy, optical communication',
            notes: 'Compact single-frequency diode laser',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser5.id,
            wavelength_base_nm: new Decimal('980'),
            wavelength_tolerance_nm: new Decimal('2'),
            bandwidth_nm: new Decimal('0.001'),
            wavelength_stability_nm_per_c: new Decimal('0.3'),
            wavelength_tuning_range: '975-985 nm',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser5.id,
            beam_divergence_mrad: new Decimal('1.5'),
            beam_quality_m2: new Decimal('1.2'),
            aperture_mm: new Decimal('5.6'),
            polarization: 'Linear',
            polarization_ratio_db: new Decimal('20'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser5.id,
            power_stability_percent: new Decimal('0.5'),
            pointing_stability_urad: new Decimal('3'),
            temperature_stability_c: new Decimal('0.01'),
            warmup_time_min: new Decimal('2'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser5.id,
            operating_temp_min_c: new Decimal('15'),
            operating_temp_max_c: new Decimal('35'),
            storage_temp_min_c: new Decimal('-40'),
            storage_temp_max_c: new Decimal('85'),
            humidity_max_percent: new Decimal('90'),
            protection_class: 'IP20',
            created_at: new Date(),
        },
    });

    // 6. UV Excimer Laser (Coherent)
    const laser6 = await prisma.lasers.create({
        data: {
            model_name: 'ExciStar XS 500',
            manufacturer_id: manufacturers[0].id,
            laser_type: 'Excimer',
            modulation_type: 'Pulsed',
            cooling_method: 'Water',
            is_single_mode: false,
            power_output_w: new Decimal('100'),
            power_consumption_w: new Decimal('8000'),
            application: 'Semiconductor lithography, medical surgery',
            notes: 'Deep UV excimer laser for microfabrication',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser6.id,
            wavelength_base_nm: new Decimal('248'),
            wavelength_tolerance_nm: new Decimal('0.3'),
            bandwidth_nm: new Decimal('0.5'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser6.id,
            beam_divergence_mrad: new Decimal('3'),
            aperture_mm: new Decimal('24'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser6.id,
            power_stability_percent: new Decimal('5'),
            warmup_time_min: new Decimal('20'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser6.id,
            operating_temp_min_c: new Decimal('20'),
            operating_temp_max_c: new Decimal('25'),
            storage_temp_min_c: new Decimal('15'),
            storage_temp_max_c: new Decimal('30'),
            humidity_max_percent: new Decimal('60'),
            protection_class: 'IP30',
            created_at: new Date(),
        },
    });

    await prisma.pulse_specs.create({
        data: {
            laser_id: laser6.id,
            pulse_width_ns: new Decimal('20'),
            pulse_energy_j: new Decimal('2'),
            rep_rate_hz: new Decimal('50'),
            duty_cycle_percent: new Decimal('0.0001'),
            rise_time_ns: new Decimal('5'),
            fall_time_ns: new Decimal('5'),
            created_at: new Date(),
        },
    });

    // 7. Red HeNe Laser (Thorlabs)
    const laser7 = await prisma.lasers.create({
        data: {
            model_name: 'HRP050',
            manufacturer_id: manufacturers[4].id,
            laser_type: 'HeNe',
            modulation_type: 'CW',
            cooling_method: 'Air',
            is_single_mode: true,
            power_output_w: new Decimal('0.005'),
            power_consumption_w: new Decimal('15'),
            application: 'Alignment, interferometry, education',
            notes: 'Classic red helium-neon laser',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser7.id,
            wavelength_base_nm: new Decimal('632.8'),
            wavelength_tolerance_nm: new Decimal('0.1'),
            bandwidth_nm: new Decimal('0.002'),
            wavelength_stability_nm_per_c: new Decimal('0.002'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser7.id,
            beam_divergence_mrad: new Decimal('1.3'),
            beam_quality_m2: new Decimal('1.0'),
            aperture_mm: new Decimal('0.8'),
            polarization: 'Random',
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser7.id,
            power_stability_percent: new Decimal('3'),
            pointing_stability_urad: new Decimal('15'),
            warmup_time_min: new Decimal('3'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser7.id,
            operating_temp_min_c: new Decimal('10'),
            operating_temp_max_c: new Decimal('40'),
            storage_temp_min_c: new Decimal('-20'),
            storage_temp_max_c: new Decimal('60'),
            humidity_max_percent: new Decimal('85'),
            protection_class: 'IP20',
            created_at: new Date(),
        },
    });

    // 8. Nd:YVO4 Picosecond Laser (EKSPLA)
    const laser8 = await prisma.lasers.create({
        data: {
            model_name: 'PL2250',
            manufacturer_id: manufacturers[6].id,
            laser_type: 'Nd:YVO4',
            modulation_type: 'Pulsed',
            cooling_method: 'Water',
            is_single_mode: false,
            power_output_w: new Decimal('20'),
            power_consumption_w: new Decimal('1500'),
            application: 'Materials processing, LIDAR, biomedical',
            notes: 'Picosecond pulsed laser with harmonics',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser8.id,
            wavelength_base_nm: new Decimal('1064'),
            wavelength_tolerance_nm: new Decimal('1'),
            bandwidth_nm: new Decimal('0.2'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser8.id,
            beam_divergence_mrad: new Decimal('2'),
            beam_quality_m2: new Decimal('1.5'),
            aperture_mm: new Decimal('6'),
            polarization: 'Linear',
            polarization_ratio_db: new Decimal('100'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser8.id,
            power_stability_percent: new Decimal('2'),
            pointing_stability_urad: new Decimal('30'),
            warmup_time_min: new Decimal('15'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser8.id,
            operating_temp_min_c: new Decimal('15'),
            operating_temp_max_c: new Decimal('30'),
            storage_temp_min_c: new Decimal('0'),
            storage_temp_max_c: new Decimal('50'),
            humidity_max_percent: new Decimal('75'),
            protection_class: 'IP30',
            created_at: new Date(),
        },
    });

    await prisma.pulse_specs.create({
        data: {
            laser_id: laser8.id,
            pulse_width_ns: new Decimal('0.01'), // 10 picoseconds
            pulse_energy_j: new Decimal('0.002'),
            rep_rate_hz: new Decimal('10000'),
            duty_cycle_percent: new Decimal('0.0001'),
            rise_time_ns: new Decimal('0.003'),
            fall_time_ns: new Decimal('0.003'),
            created_at: new Date(),
        },
    });

    // 9. Quantum Cascade Laser (Thorlabs)
    const laser9 = await prisma.lasers.create({
        data: {
            model_name: 'QF4550CM1',
            manufacturer_id: manufacturers[4].id,
            laser_type: 'QCL',
            modulation_type: 'CW',
            cooling_method: 'TEC',
            is_single_mode: true,
            power_output_w: new Decimal('0.15'),
            power_consumption_w: new Decimal('25'),
            application: 'Gas sensing, spectroscopy, thermal imaging',
            notes: 'Mid-infrared quantum cascade laser',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser9.id,
            wavelength_base_nm: new Decimal('4550'),
            wavelength_tolerance_nm: new Decimal('50'),
            bandwidth_nm: new Decimal('1'),
            wavelength_tuning_range: '4500-4600 nm',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser9.id,
            beam_divergence_mrad: new Decimal('40'),
            aperture_mm: new Decimal('3'),
            polarization: 'TE',
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser9.id,
            power_stability_percent: new Decimal('1'),
            temperature_stability_c: new Decimal('0.1'),
            warmup_time_min: new Decimal('5'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser9.id,
            operating_temp_min_c: new Decimal('15'),
            operating_temp_max_c: new Decimal('35'),
            storage_temp_min_c: new Decimal('-40'),
            storage_temp_max_c: new Decimal('85'),
            humidity_max_percent: new Decimal('90'),
            protection_class: 'IP20',
            created_at: new Date(),
        },
    });

    // 10. Blue Diode Laser (Newport)
    const laser10 = await prisma.lasers.create({
        data: {
            model_name: 'LQC-405-150C',
            manufacturer_id: manufacturers[7].id,
            laser_type: 'Diode',
            modulation_type: 'CW',
            cooling_method: 'TEC',
            is_single_mode: true,
            power_output_w: new Decimal('0.15'),
            power_consumption_w: new Decimal('12'),
            application: 'Fluorescence microscopy, optogenetics',
            notes: 'Compact blue laser diode for life sciences',
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.wavelength_specs.create({
        data: {
            laser_id: laser10.id,
            wavelength_base_nm: new Decimal('405'),
            wavelength_tolerance_nm: new Decimal('5'),
            bandwidth_nm: new Decimal('1'),
            wavelength_stability_nm_per_c: new Decimal('0.05'),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });

    await prisma.optical_specs.create({
        data: {
            laser_id: laser10.id,
            beam_divergence_mrad: new Decimal('2.5'),
            beam_quality_m2: new Decimal('1.3'),
            aperture_mm: new Decimal('5.6'),
            polarization: 'Linear',
            polarization_ratio_db: new Decimal('100'),
            created_at: new Date(),
        },
    });

    await prisma.stability_specs.create({
        data: {
            laser_id: laser10.id,
            power_stability_percent: new Decimal('1'),
            pointing_stability_urad: new Decimal('5'),
            temperature_stability_c: new Decimal('0.05'),
            warmup_time_min: new Decimal('1'),
            created_at: new Date(),
        },
    });

    await prisma.environmental_specs.create({
        data: {
            laser_id: laser10.id,
            operating_temp_min_c: new Decimal('15'),
            operating_temp_max_c: new Decimal('35'),
            storage_temp_min_c: new Decimal('-40'),
            storage_temp_max_c: new Decimal('85'),
            humidity_max_percent: new Decimal('90'),
            protection_class: 'IP20',
            created_at: new Date(),
        },
    });

    console.log('✅ Created 10 lasers with complete specifications');

    // Summary
    const totalManufacturers = await prisma.manufacturers.count();
    const totalLasers = await prisma.lasers.count();
    const totalWavelengthSpecs = await prisma.wavelength_specs.count();
    const totalOpticalSpecs = await prisma.optical_specs.count();
    const totalStabilitySpecs = await prisma.stability_specs.count();
    const totalEnvironmentalSpecs = await prisma.environmental_specs.count();
    const totalPulseSpecs = await prisma.pulse_specs.count();

    console.log('\n📊 Seeding Summary:');
    console.log(`   Manufacturers: ${totalManufacturers}`);
    console.log(`   Lasers: ${totalLasers}`);
    console.log(`   Wavelength Specs: ${totalWavelengthSpecs}`);
    console.log(`   Optical Specs: ${totalOpticalSpecs}`);
    console.log(`   Stability Specs: ${totalStabilitySpecs}`);
    console.log(`   Environmental Specs: ${totalEnvironmentalSpecs}`);
    console.log(`   Pulse Specs: ${totalPulseSpecs}`);
    console.log('\n🌱 Database seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });