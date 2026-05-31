export interface Category {
    id: number;
    name: string;   // 'სალათები'
    slug: string;   // 'salatebi' (URL-ში გამოყენება)
    description: string;
}

export interface MenuItem {
    id: number;
    name: string;   // 'ბაქლავა'
    description: string;
    price: number;   // 12.50
    imageUrl: string;
    categoryId: number;   // Category-ს id
    available: boolean;  // ხელმისაწვდომია?
}

export interface OrderItem {
    menuItemId: number;
    name: string;
    price: number;
    quantity: number;   // რამდენი?
}

export interface Order {
    id: number;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'confirmed' | 'done';
    createdAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;  // optional - შეცდომის შემთხვევაში
}

