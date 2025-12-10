import { NextResponse } from "next/server";
import { PrismaClient } from '../../../generated/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const formData = await req.formData();
    const action = formData.get("action");

    try {
        switch (action) {
            case "createManufacturer": {
                const name = formData.get("name") as string;
                await prisma.manufacturers.create({
                    data: { name }
                });
                return NextResponse.json({ ok: true, message: "Created" });
            }

            case "updateManufacturer": {
                const id = parseInt(formData.get("id") as string);
                const name = formData.get("name") as string;
                await prisma.manufacturers.update({
                    where: { id },
                    data: { name },
                });
                return NextResponse.json({ ok: true, message: "Updated" });
            }

            case "deleteManufacturer": {
                const id = parseInt(formData.get("id") as string);
                await prisma.manufacturers.delete({
                    where: { id },
                });
                return NextResponse.json({ ok: true, message: "Deleted" });
            }

            case "readManufacturers": {
                const data = await prisma.manufacturers.findMany({
                    include: { lasers: true },
                });
                return NextResponse.json(data);
            }

            default:
                return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
