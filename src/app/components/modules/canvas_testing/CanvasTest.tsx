"use client";

import { useEffect, useRef, useMemo } from "react";
import styles from './canvasTest.module.sass';

interface LaserData {
    wavelength_min_nm: number;
    wavelength_max_nm: number;
    power_mw?: number;
    pulse_width_ns: number;
    rep_rate_hz: number;
    beam_quality_m2: number;
}

interface CanvasTestProps {
    laser: LaserData;
}

export default function CanvasTest({ laser }: CanvasTestProps) {

    // ----------- Convert DB to canvas parameters (MEMOIZED) -----------
    const { amplitude: amplitudeValue, frequency: frequencyValue, powerAmplifier } = useMemo(() => {
        const wavelengthAvg = (laser.wavelength_min_nm + laser.wavelength_max_nm) / 2;
        const amplitudeCalculated = 5 * laser.beam_quality_m2;
        const frequencyCalculated = (1 / wavelengthAvg) * 1000;
        const power_amplifier = laser.power_mw ? laser.power_mw / 100000 : 1;

        return {
            amplitude: amplitudeCalculated,
            frequency: frequencyCalculated,
            powerAmplifier: power_amplifier
        };
    }, [laser.wavelength_min_nm, laser.wavelength_max_nm, laser.beam_quality_m2, laser.power_mw]);

    // Refs for animation (only phase changes per frame)
    const phaseRef = useRef(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef<number>(0);

    // ----------------------- Drawing -----------------------
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Create gradient once (not every frame)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "#ff6600");
        gradient.addColorStop(0.5, "#ffd000");
        gradient.addColorStop(1, "#ff6600");

        function draw() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 5;
            ctx.shadowColor = "rgba(255, 0, 0, 1)";
            ctx.shadowBlur = 25;

            const centerY = canvas.height / 2;

            for (let x = 0; x < canvas.width; x++) {
                const noise =
                    Math.sin(x * 0.8 + phaseRef.current * Math.random() * 8) *
                    Math.random() * powerAmplifier;

                const y =
                    amplitudeValue *
                    Math.sin(frequencyValue * x + phaseRef.current) +
                    noise;

                ctx.lineTo(x, y + centerY);
            }

            ctx.stroke();

            phaseRef.current += 0.05;
            animationFrameRef.current = requestAnimationFrame(draw);
        }

        draw();

        // Cleanup animation frame on unmount
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [amplitudeValue, frequencyValue, powerAmplifier]); // Only re-run if these values change

    // ----------------------- UI -----------------------
    return (
        <canvas
            ref={canvasRef}
            width={typeof window !== 'undefined' ? window.innerWidth - 10 : 800}
            height={210}
            className={styles.canvas}
        />
    );
}