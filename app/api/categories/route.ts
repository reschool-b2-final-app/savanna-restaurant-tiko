import { categories } from "@/lib/data";
import { ApiResponse, Category } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    const response: ApiResponse<Category[]> = {
        success: true,
        data: categories
    };

    return NextResponse.json(response);
}