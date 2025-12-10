import { PrismaClient } from "@/generated/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    try {
        const laser = await prisma.lasers.findUnique({
            where: { id: parseInt(id) },
            include: { manufacturer: true },
        });
        if (!laser) {
            return new Response(JSON.stringify({ error: "Laser not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(laser), { status: 200 });
    } catch (err: any) {
        console.error(err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}