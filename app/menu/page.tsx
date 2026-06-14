// app/menu/page.tsx
import { ApiResponse, MenuItem, Category } from '@/types';
import Link from 'next/link';
 
export default async function MenuPage() {
  // საკუთარი API-დან fetch()
  const [menuRes, catRes] = await Promise.all([
    fetch('http://localhost:3000/api/menu', {
      next: { revalidate: 60 },  // 60 წამში განახლება
    }),
    fetch('http://localhost:3000/api/categories', {
      next: { revalidate: 60 },
    }),
  ]);
 
  if (!menuRes.ok || !catRes.ok) {
    return <p>API-ს შეცდომა. სცადე მოგვიანებით.</p>;
  }
 
  const menuData: ApiResponse<MenuItem[]> = await menuRes.json();
  const catData:  ApiResponse<Category[]> = await catRes.json();
 
  const items      = menuData.data;
  const categories = catData.data;
 
  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>
        Savanna Restaurant - მენიუ
      </h1>
 
      {/* კატეგორიები */}
      <div className='flex gap-4 mb-8'>
        {categories.map((cat) => (
          <span
            key={cat.id}
            className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm'
          >
            {cat.name}
          </span>
        ))}
      </div>
 
      {/* კერძები */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item) => (
          <Link key={item.id} href={`/menu/${item.id}`}>
            <div className='border rounded-xl p-4 hover:shadow-lg transition'>
              <h2 className='font-bold text-lg'>{item.name}</h2>
              <p className='text-gray-500 text-sm'>{item.description}</p>
              <div className='flex justify-between mt-4'>
                <span className='font-bold text-blue-600'>
                  {item.price} ₾
                </span>
                {!item.available && (
                  <span className='text-red-500 text-sm'>
                    არ არის ხელმისაწვდომი
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
