import { Category, MenuItem } from "@/types";

export const categories: Category[] = [
    {
        id: 1,
        name: 'სალათები',
        slug: 'salatebi',
        description: 'სეზონური ბოსტნეულის სალათები',
    },
    {
        id: 2,
        name: 'მთავარი კერძები',
        slug: 'mtavari-kerdzebi',
        description: 'ტრადიციული ქართული კერძები',
    },
    {
        id: 3,
        name: 'სასმელები',
        slug: 'sasmeleebi',
        description: 'ცხელი და ცივი სასმელები',
    },
];

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: 'სალათა',
        description: 'ახალი ბოსტნეული, ზეთისხილი, ფეტა',
        price: 12.50,
        imageUrl: '/images/salad.jpg',
        categoryId: 1,
        available: true,
    },
    {
        id: 2,
        name: 'ხინკალი',
        description: 'ხელნაკეთი ხინკალი, ხორცით',
        price: 18.00,
        imageUrl: '/images/khinkali.jpg',
        categoryId: 2,
        available: true,
    },
    {
        id: 3,
        name: 'ჩახოხბილი',
        description: 'ქათმის ჩახოხბილი ბოსტნეულით',
        price: 22.00,
        imageUrl: '/images/chakhokhbili.jpg',
        categoryId: 2,
        available: true,
    },
    {
        id: 4,
        name: 'ლიმონათი',
        description: 'სახლის ლიმონათი, პიტნით',
        price: 6.00,
        imageUrl: '/images/lemonade.jpg',
        categoryId: 3,
        available: false,
    },
    {
        id: 5,
        name: 'ბეღელა',
        description: 'ყველით და ბალახით',
        price: 14.00,
        imageUrl: '/images/beghela.jpg',
        categoryId: 1,
        available: true,
    },
];
