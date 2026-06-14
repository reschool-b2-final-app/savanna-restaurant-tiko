// app/menu/[id]/page.tsx
import { ApiResponse, MenuItem } from '@/types';
import Link from 'next/link';
 
export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await fetch(
    `http://localhost:3000/api/menu/${(await params).id}`
  );
 
  if (!res.ok) {
    return (
      <div className='p-8'>
        <h1>კერძი ვერ მოიძებნა</h1>
        <Link href='/menu'>უკან მენიუში</Link>
      </div>
    );
  }
 
  const { data: item }: ApiResponse<MenuItem> = await res.json();
 
  return (
    <main className='p-8 max-w-2xl mx-auto'>
      <Link href='/menu' className='text-blue-500 mb-4 block'>
        ← უკან მენიუში
      </Link>
      <h1 className='text-3xl font-bold'>{item.name}</h1>
      <p className='text-gray-600 mt-2'>{item.description}</p>
      <p className='text-2xl font-bold text-blue-600 mt-4'>
        {item.price} ₾
      </p>
      {item.available ? (
        <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl'>
          კალათაში დამატება
        </button>
      ) : (
        <p className='mt-6 text-red-500'>
          ამ კერძის შეკვეთა ახლა შეუძლებელია
        </p>
      )}
    </main>
  );
}
