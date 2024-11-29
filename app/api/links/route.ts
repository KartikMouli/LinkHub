import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Handle GET requests
export async function GET() {
    try {
        const links = await prisma.link.findMany({ orderBy: { createdAt: "desc" } });
        return NextResponse.json(links, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 });
    }
}

// Handle POST requests
export async function POST(req: Request) {
    try {
        const { title, url } = await req.json();
        const newLink = await prisma.link.create({ data: { title, url } });
        return NextResponse.json(newLink, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
    }
}

// Handle DELETE requests
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        await prisma.link.delete({ where: { id } });
        return NextResponse.json(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete link" }, { status: 500 });
    }
}

// Handle PATCH requests (e.g., increment views)
export async function PATCH(req: Request) {
    try {
        const { id } = await req.json();
        const updatedLink = await prisma.link.update({
            where: { id },
            data: { views: { increment: 1 } },
        });
        return NextResponse.json(updatedLink, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to increment views" }, { status: 500 });
    }
}
