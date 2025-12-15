"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./lasersMenu.module.sass";

interface LasersMenuProps {
    limit?: number;
    manufacturer?: string;
    searchTerm?: string;
    power?: string;
    wavelength?: string;
    type?: string;
    cooling?: string;
    modulation?: string;
    application?: string;
    pulse?: string;
    stability?: string;
}

interface Laser {
    id: number;
    model_name: string;
    power_output_w: any;
    laser_type: string;
    cooling_method: string | null;
    notes: string | null;
    manufacturer: {
        name: string;
        country: string | null;
    };
    wavelength_specs: {
        wavelength_base_nm: any;
    } | null;
}

export default function LasersMenu({
    limit = 100,
    manufacturer,
    searchTerm,
    power,
    wavelength,
    type,
    cooling,
    modulation,
    application,
    pulse,
    stability
}: LasersMenuProps) {
    const [lasers, setLasers] = useState<Laser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLasers() {
            setLoading(true);

            const params = new URLSearchParams();
            if (manufacturer) params.set('manufacturer', manufacturer);
            if (searchTerm) params.set('search', searchTerm);
            if (power) params.set('power', power);
            if (wavelength) params.set('wavelength', wavelength);
            if (type) params.set('type', type);
            if (cooling) params.set('cooling', cooling);
            if (modulation) params.set('modulation', modulation);
            if (application) params.set('application', application);
            if (pulse) params.set('pulse', pulse);
            if (stability) params.set('stability', stability);
            if (limit) params.set('limit', limit.toString());

            try {
                const response = await fetch(`/api/lasers?${params.toString()}`);
                const data = await response.json();
                setLasers(data);
            } catch (error) {
                console.error('Error fetching lasers:', error);
                setLasers([]);
            } finally {
                setLoading(false);
            }
        }

        fetchLasers();
    }, [manufacturer, searchTerm, power, wavelength, type, cooling, modulation, application, pulse, stability, limit]);

    const base = process.env.NEXT_PUBLIC_BASE_URL || '';

    if (loading) {
        return (
            <div className={styles.grid}>
                <div className={styles.empty}>Loading lasers...</div>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {lasers.map((laser: Laser) => {
                const wlSpecs = laser.wavelength_specs;
                const wavelengthDisplay = wlSpecs
                    ? `${wlSpecs.wavelength_base_nm} nm`
                    : 'N/A';

                return (
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
                                    {wavelengthDisplay}
                                </p>

                                {laser.power_output_w && (
                                    <p>
                                        <span className={styles.label}>Power:</span>{' '}
                                        {Number(laser.power_output_w)} W
                                    </p>
                                )}

                                <p>
                                    <span className={styles.label}>Type:</span>{' '}
                                    {laser.laser_type || 'N/A'}
                                </p>

                                {laser.cooling_method && (
                                    <p>
                                        <span className={styles.label}>Cooling:</span>{' '}
                                        {laser.cooling_method}
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
                );
            })}

            {lasers.length === 0 && !loading && (
                <div className={styles.empty}>
                    No lasers found
                </div>
            )}
        </div>
    );
}