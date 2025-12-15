import { notFound } from 'next/navigation';
import { prisma } from '@/app/lib/prisma';
import styles from './page.module.sass';

// ====================================================================
// Допоміжні функції (залишаються як у вашому останньому варіанті)
// ====================================================================

interface LaserDetailPageProps {
    params: {
        id: string;
    };
}

// Допоміжна функція для отримання HTML-тегу <img> для прапора
function getCountryFlag(countryCode: string) {
    if (!countryCode) return null;
    const lowerCaseCode = countryCode.toLowerCase();

    // ВАЖЛИВО: Використовуйте атрибут key для унікальності, коли повертаєте масиви/фрагменти
    return (
        <img
            key={`flag-${lowerCaseCode}`}
            src={`https://flagcdn.com/w20/${lowerCaseCode}.png`}
            srcSet={`https://flagcdn.com/w40/${lowerCaseCode}.png 2x`}
            width="20"
            alt={countryCode}
            style={{ marginLeft: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }}
        />
    );
}

function getKeyByValue(obj: Record<string, any>, value: string): string | undefined {
    // Перевірка, чи значення існує і є рядком
    if (!value || typeof value !== 'string') return undefined;
    // Шукаємо ключ, значення якого (повна назва країни) відповідає laser.manufacturer.country (регістронезалежно)
    const normalizedValue = value.toLowerCase().trim();

    for (const key in obj) {
        if (typeof obj[key] === 'string' && obj[key].toLowerCase().trim() === normalizedValue) {
            return key;
        }
    }
    return undefined;
}

// ====================================================================
// Основний асинхронний компонент
// ====================================================================

export default async function LaserDetailPage({ params }: { params: { id: string } }) {
    const id = (await params).id;
    const laserId = parseInt(id);

    if (isNaN(laserId)) {
        notFound();
    }

    const laser = await prisma.lasers.findUnique({
        where: { id: laserId },
        include: {
            manufacturer: true,
            wavelength_specs: true,
            optical_specs: true,
            stability_specs: true,
            environmental_specs: true,
            pulse_specs: true,
        },
    });

    if (!laser) {
        notFound();
    }

    // 1. Отримання кодів країн (Асинхронна операція)
    async function fetchCountryCodes() {
        // Додаємо обробку помилок
        try {
            const res = await fetch('https://flagcdn.com/en/codes.json', {
                next: { revalidate: 60 * 60 * 24 } // Кешувати на 24 години
            });
            if (!res.ok) {
                console.error(`Failed to fetch country codes: ${res.statusText}`);
                return {};
            }
            return res.json();
        } catch (error) {
            console.error("Error fetching country codes:", error);
            return {};
        }
    };

    const countryCodes = await fetchCountryCodes();

    // 2. Пошук ISO-коду країни
    const countryNameFromDB = laser.manufacturer.country;
    const isoCode = getKeyByValue(countryCodes, countryNameFromDB || '');

    // 3. Генерація елемента прапора
    const countryFlagElement = getCountryFlag(isoCode || '');


    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>{laser.model_name}</h1>
                    <div className={styles.meta}>
                        <span className={styles.badge}>{laser.laser_type}</span>
                        <span className={styles.badge}>{laser.modulation_type}</span>
                        {laser.is_single_mode && <span className={styles.badge}>Single Mode</span>}
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className={styles.grid}>
                {/* General Information */}
                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>Загальна інформація</h2>
                    {/* Використовуємо .specGrid для 2-колонного макета */}
                    <div className={styles.specGrid}>
                        <SpecRow label="Виробник" value={laser.manufacturer.name} />
                        <SpecRow
                            label="Країна"
                            value={
                                <>
                                    {countryNameFromDB}
                                    {countryFlagElement}
                                </>
                            }
                        />
                        <SpecRow label="Потужність виходу" value={`${laser.power_output_w} Вт`} />
                        <SpecRow label="Споживання енергії" value={laser.power_consumption_w ? `${laser.power_consumption_w} Вт` : '—'} />
                        <SpecRow label="Метод охолодження" value={laser.cooling_method} />
                        <SpecRow label="Застосування" value={laser.application} />
                        {/* Примітка: Примітка, як і раніше, буде займати повну ширину, але тепер це стилізується в SpecRow. */}
                        {laser.notes && <SpecRow label="Примітки" value={laser.notes} fullWidth />}
                    </div>
                </section>

                {/* Wavelength Specifications */}
                {laser.wavelength_specs && (
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Характеристики довжини хвилі</h2>
                        <div className={styles.specGrid}>
                            <SpecRow
                                label="Базова довжина хвилі"
                                value={`${laser.wavelength_specs.wavelength_base_nm} нм`}
                            />
                            <SpecRow
                                label="Толерантність"
                                value={laser.wavelength_specs.wavelength_tolerance_nm ? `±${laser.wavelength_specs.wavelength_tolerance_nm} нм` : '—'}
                            />
                            <SpecRow
                                label="Пропускна здатність"
                                value={laser.wavelength_specs.bandwidth_nm ? `${laser.wavelength_specs.bandwidth_nm} нм` : '—'}
                            />
                            <SpecRow
                                label="FWHM"
                                value={laser.wavelength_specs.fwhm_nm ? `${laser.wavelength_specs.fwhm_nm} нм` : '—'}
                            />
                            <SpecRow
                                label="Стабільність (°C)"
                                value={laser.wavelength_specs.wavelength_stability_nm_per_c ? `${laser.wavelength_specs.wavelength_stability_nm_per_c} нм/°C` : '—'}
                            />
                            <SpecRow
                                label="Діапазон налаштування"
                                value={laser.wavelength_specs.wavelength_tuning_range}
                            />
                        </div>
                    </section>
                )}

                {/* Optical Specifications */}
                {laser.optical_specs && (
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Оптичні характеристики</h2>
                        <div className={styles.specGrid}>
                            <SpecRow
                                label="Розбіжність променя"
                                value={laser.optical_specs.beam_divergence_mrad ? `${laser.optical_specs.beam_divergence_mrad} мрад` : '—'}
                            />
                            <SpecRow
                                label="Якість променя (M²)"
                                value={laser.optical_specs.beam_quality_m2?.toString() || '—'}
                            />
                            <SpecRow
                                label="Апертура"
                                value={laser.optical_specs.aperture_mm ? `${laser.optical_specs.aperture_mm} мм` : '—'}
                            />
                            <SpecRow
                                label="Числова апертура"
                                value={laser.optical_specs.numerical_aperture?.toString() || '—'}
                            />
                            <SpecRow
                                label="Поляризація"
                                value={laser.optical_specs.polarization}
                            />
                            <SpecRow
                                label="Коефіцієнт поляризації"
                                value={laser.optical_specs.polarization_ratio_db ? `${laser.optical_specs.polarization_ratio_db} дБ` : '—'}
                            />
                        </div>
                    </section>
                )}

                {/* Stability Specifications */}
                {laser.stability_specs && (
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Характеристики стабільності</h2>
                        <div className={styles.specGrid}>
                            <SpecRow
                                label="Стабільність потужності"
                                value={laser.stability_specs.power_stability_percent ? `±${laser.stability_specs.power_stability_percent}%` : '—'}
                            />
                            <SpecRow
                                label="Стабільність наведення"
                                value={laser.stability_specs.pointing_stability_urad ? `${laser.stability_specs.pointing_stability_urad} мкрад` : '—'}
                            />
                            <SpecRow
                                label="Температурна стабільність"
                                value={laser.stability_specs.temperature_stability_c ? `${laser.stability_specs.temperature_stability_c}°C` : '—'}
                            />
                            <SpecRow
                                label="Час прогріву"
                                value={laser.stability_specs.warmup_time_min ? `${laser.stability_specs.warmup_time_min} хв` : '—'}
                            />
                        </div>
                    </section>
                )}

                {/* Environmental Specifications */}
                {laser.environmental_specs && (
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Екологічні умови</h2>
                        <div className={styles.specGrid}>
                            <SpecRow
                                label="Робоча температура"
                                value={
                                    laser.environmental_specs.operating_temp_min_c && laser.environmental_specs.operating_temp_max_c
                                        ? `${laser.environmental_specs.operating_temp_min_c}°C – ${laser.environmental_specs.operating_temp_max_c}°C`
                                        : '—'
                                }
                            />
                            <SpecRow
                                label="Температура зберігання"
                                value={
                                    laser.environmental_specs.storage_temp_min_c && laser.environmental_specs.storage_temp_max_c
                                        ? `${laser.environmental_specs.storage_temp_min_c}°C – ${laser.environmental_specs.storage_temp_max_c}°C`
                                        : '—'
                                }
                            />
                            <SpecRow
                                label="Максимальна вологість"
                                value={laser.environmental_specs.humidity_max_percent ? `${laser.environmental_specs.humidity_max_percent}%` : '—'}
                            />
                            <SpecRow
                                label="Клас захисту"
                                value={laser.environmental_specs.protection_class}
                            />
                        </div>
                    </section>
                )}

                {/* Pulse Specifications */}
                {laser.pulse_specs && (
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Імпульсні характеристики</h2>
                        <div className={styles.specGrid}>
                            <SpecRow
                                label="Ширина імпульсу"
                                value={laser.pulse_specs.pulse_width_ns ? `${laser.pulse_specs.pulse_width_ns} нс` : '—'}
                            />
                            <SpecRow
                                label="Енергія імпульсу"
                                value={laser.pulse_specs.pulse_energy_j ? `${laser.pulse_specs.pulse_energy_j} Дж` : '—'}
                            />
                            <SpecRow
                                label="Частота повторення"
                                value={laser.pulse_specs.rep_rate_hz ? `${laser.pulse_specs.rep_rate_hz} Гц` : '—'}
                            />
                            <SpecRow
                                label="Робочий цикл"
                                value={laser.pulse_specs.duty_cycle_percent ? `${laser.pulse_specs.duty_cycle_percent}%` : '—'}
                            />
                            <SpecRow
                                label="Час наростання"
                                value={laser.pulse_specs.rise_time_ns ? `${laser.pulse_specs.rise_time_ns} нс` : '—'}
                            />
                            <SpecRow
                                label="Час спаду"
                                value={laser.pulse_specs.fall_time_ns ? `${laser.pulse_specs.fall_time_ns} нс` : '—'}
                            />
                        </div>
                    </section>
                )}

                {/* Manufacturer Contact */}
                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>Контактна інформація виробника</h2>
                    {/* Використовуємо fullWidth для контактної інформації, оскільки це не завжди виглядає добре в 2x2 */}
                    <div className={styles.specGrid}>
                        <SpecRow label="Веб-сайт" value={laser.manufacturer.website} link fullWidth />
                        <SpecRow label="Email" value={laser.manufacturer.contact_email} email fullWidth />
                    </div>
                </section>
            </div>
        </div>
    );
}

// Примітка: Компонент SpecRow було спрощено
function SpecRow({
    label,
    value,
    fullWidth = false,
    link = false,
    email = false
}: {
    label: string;
    value?: string | React.ReactNode | null;
    fullWidth?: boolean;
    link?: boolean;
    email?: boolean;
}) {
    if (!value && typeof value !== 'number') return null;

    // Створюємо логіку відображення для посилань/тексту
    const renderValue = () => {
        if (link && typeof value === 'string') {
            // Перевірка, чи посилання починається з протоколу (http/https)
            const safeUrl = value.startsWith('http') ? value : `https://${value}`;
            return (
                <a href={safeUrl} target="_blank" rel="noopener noreferrer" className={styles.specLink}>
                    {value}
                </a>
            );
        }
        if (email && typeof value === 'string') {
            return (
                <a href={`mailto:${value}`} className={styles.specLink}>
                    {value}
                </a>
            );
        }
        return value;
    };


    // ВАЖЛИВО: Обертаємо вміст у div, який відповідає за розмір сітки.
    // fullWidth означає, що цей SpecRow займе обидві колонки в сітці.
    // Якщо не fullWidth, він займає лише одну колонку.
    return (
        <div className={fullWidth ? styles.fullWidthRow : styles.specGridItem}>
            <div className={styles.specRow}>
                <dt className={styles.specLabel}>{label}</dt>
                <dd className={styles.specValue}>
                    {renderValue()}
                </dd>
            </div>
        </div>
    );
}