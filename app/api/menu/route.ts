import { menuItems } from "@/lib/data";
import { ApiResponse, MenuItem } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let result = menuItems;
    if (category) {
        result = result.filter(
            (product) => product.categoryId === parseInt(category)
        )
    }

    const response: ApiResponse<MenuItem[]> = {
        success: true,
        data: result
    };

    return NextResponse.json(response);
}


export async function POST(request: Request) {
    try {
        const requestBody = await request.json();

        if (!requestBody.name || !requestBody.price || !requestBody.categoryId) {
            return NextResponse.json(
                { success: false, error: 'name, price, categoryId სავალდებულოა' },
                { status: 400 }
            );
        }

        const newItem: MenuItem = {
            id: menuItems.length + 1,
            name: requestBody.name,
            description: requestBody.description || 'No description',
            price: requestBody.price,
            imageUrl: requestBody.imageUrl || 'No Image',
            categoryId: requestBody.categoryId,
            available: requestBody.available || true,
        };

        menuItems.push(newItem);

        return NextResponse.json(
            { success: true, data: newItem },
            { status: 201 }  // 201 = Created
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'სერვერის შეცდომა' },
            { status: 500 }
        );
    }

}