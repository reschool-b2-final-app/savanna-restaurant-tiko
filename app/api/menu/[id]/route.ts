// GET /api/menu/2

import { menuItems } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const menuItem = menuItems.find((item) => item.id === parseInt(id));

    if (!menuItem) {
        return NextResponse.json(
            { success: false, error: `კერძი ID:${id} ვერ მოიძებნა` },
            { status: 404 }
        );
    }

    return NextResponse.json({ success: true, data: menuItem }, { status: 200 });
}

// DELETE /api/menu/2
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }>}) {
    const { id } = await params;
    const index = menuItems.findIndex((m) => m.id === parseInt(id));
   
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'ვერ მოიძებნა' },
        { status: 404 }
      );
    }
   
    const deleted = menuItems.splice(index, 1)[0];
   
    return NextResponse.json({
      success: true,
      data: deleted,
    });
  }
  