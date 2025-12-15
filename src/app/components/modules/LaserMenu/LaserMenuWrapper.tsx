"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import LasersMenu from './LaserMenu';

function LaserMenuContent() {
    const searchParams = useSearchParams();

    return (
        <LasersMenu
            searchTerm={searchParams.get('search') || undefined}
            power={searchParams.get('power') || undefined}
            wavelength={searchParams.get('wavelength') || undefined}
            type={searchParams.get('type') || undefined}
            manufacturer={searchParams.get('manufacturer') || undefined}
            cooling={searchParams.get('cooling') || undefined}
            modulation={searchParams.get('modulation') || undefined}
            application={searchParams.get('application') || undefined}
            pulse={searchParams.get('pulse') || undefined}
            stability={searchParams.get('stability') || undefined}
        />
    );
}

export default function LaserMenuWrapper() {
    return (
        <Suspense fallback={<div>Loading lasers...</div>}>
            <LaserMenuContent />
        </Suspense>
    );
}