"use server";

import { prisma } from "@/app/lib/prisma"; // Ensure this path is correct for your project

function parseNumericQuery(args: string, fieldName: string): any {
    const parts = args.trim().toLowerCase().split(/\s+/);
    const operator = parts[0];
    const value = parseFloat(parts[1]);

    if (isNaN(value)) {
        // Fallback: if they just typed "\pw 50", treat it as equals
        const simpleValue = parseFloat(parts[0]);
        if (!isNaN(simpleValue)) return { [fieldName]: { equals: simpleValue } };
        throw new Error(`Invalid numeric value`);
    }

    if (operator === 'min' || operator === '>') return { [fieldName]: { gte: value } };
    if (operator === 'max' || operator === '<') return { [fieldName]: { lte: value } };
    if (operator === '=') return { [fieldName]: value };

    return { [fieldName]: { equals: value } };
}

export async function searchLasersByName(args: string) {
    if (!args) return "Usage: \\la [model name part]";
    const results = await prisma.lasers.count({
        where: { model_name: { contains: args, mode: 'insensitive' } }
    });
    return results > 0 ? `[LA] Found ${results} models matching "${args}"` : `[LA] No models found matching "${args}"`;
}

export async function searchManufacturersByName(args: string) {
    if (!args) return "Usage: \\m [name]";
    const results = await prisma.manufacturers.findMany({
        where: { name: { contains: args, mode: 'insensitive' } },
        select: { name: true, country: true }
    });
    if (results.length === 0) return `[M] No manufacturers found for "${args}"`;
    const names = results.map(r => `${r.name} (${r.country || 'N/A'})`).join(', ');
    return `[M] Found: ${names}`;
}

export async function searchByPowerOutput(args: string) {
    try {
        const whereClause = parseNumericQuery(args, 'power_output_w');
        const results = await prisma.lasers.count({ where: whereClause });
        return `[PW] Found ${results} lasers matching power ${args}`;
    } catch (e) {
        return `[PW] Error. Usage: \\pw > 100`;
    }
}

export async function searchByWavelength(args: string) {
    try {
        const whereClause = parseNumericQuery(args, 'wavelength_base_nm');
        const results = await prisma.lasers.count({
            where: { wavelength_specs: whereClause }
        });
        return `[WL] Found ${results} lasers matching wavelength ${args}`;
    } catch (e) {
        return `[WL] Error. Usage: \\wl < 1064`;
    }
}

export async function searchByLaserType(args: string) {
    if (!args) return "Usage: \\lt [fiber|DPSS|gas]";
    const results = await prisma.lasers.count({
        where: { laser_type: { contains: args, mode: 'insensitive' } }
    });
    return `[LT] Found ${results} lasers of type "${args}"`;
}