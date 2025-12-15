// src/app/actions.ts
'use server'

import { prisma } from "@/app/lib/prisma";

export type SearchResult = {
    type: 'laser' | 'manufacturer' | 'error' | 'empty';
    data: any;
};

export async function executeCommand(input: string): Promise<SearchResult> {
    if (!input || input.trim() === '') return { type: 'empty', data: null };

    const parts = input.trim().split(' ');
    const possibleCommand = parts[0];
    const query = parts.slice(1).join(' ');

    // 1. Check if it is a specific command
    if (possibleCommand.startsWith('\\')) {

        switch (possibleCommand) {
            case '\\laser':
                const lasers = await prisma.lasers.findMany({
                    where: { model_name: { contains: query, mode: 'insensitive' } },
                    take: 5,
                    include: { manufacturer: true }
                });
                return { type: 'laser', data: lasers };

            case '\\man':
                const man = await prisma.manufacturers.findMany({
                    where: { name: { contains: query, mode: 'insensitive' } },
                    take: 5
                });
                return { type: 'manufacturer', data: man };

            default:
                // Although the UI shows red, the server also catches invalid commands
                return { type: 'error', data: 'Unknown command' };
        }
    }

    // 2. Default behavior: "Regular laser name search"
    else {
        const lasers = await prisma.lasers.findMany({
            where: { model_name: { contains: input, mode: 'insensitive' } },
            take: 5
        });
        return { type: 'laser', data: lasers };
    }
}