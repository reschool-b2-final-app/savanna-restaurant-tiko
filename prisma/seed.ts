// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
 
async function main() {
  // ─── კატეგორიების შექმნა ────────────────────────────
  const salatebi = await prisma.category.create({
    data: {
      name:        'სალათები',
      slug:        'salatebi',
      description: 'სეზონური ბოსტნეულის სალათები',
    },
  });
 
  const mtavari = await prisma.category.create({
    data: {
      name:        'მთავარი კერძები',
      slug:        'mtavari-kerdzebi',
      description: 'ტრადიციული ქართული კერძები',
    },
  });
 
  const sasmeleebi = await prisma.category.create({
    data: {
      name:        'სასმელები',
      slug:        'sasmeleebi',
      description: 'ცხელი და ცივი სასმელები',
    },
  });
 
  // ─── კერძების შექმნა ────────────────────────────────
  await prisma.menuItem.createMany({
    data: [
      {
        name:        'ბაღის სალათა',
        description: 'ახალი ბოსტნეული, ზეთისხილი, ფეტა',
        price:       12.50,
        categoryId:  salatebi.id,
        available:   true,
      },
      {
        name:        'ბეღელა',
        description: 'ყველით და ბალახით',
        price:       14.00,
        categoryId:  salatebi.id,
        available:   true,
      },
      {
        name:        'ხინკალი',
        description: 'ხელნაკეთი ხინკალი ხორცით',
        price:       18.00,
        categoryId:  mtavari.id,
        available:   true,
      },
      {
        name:        'ჩახოხბილი',
        description: 'ქათმის ჩახოხბილი ბოსტნეულით',
        price:       22.00,
        categoryId:  mtavari.id,
        available:   true,
      },
      {
        name:        'ლიმონათი',
        description: 'სახლის ლიმონათი პიტნით',
        price:       6.00,
        categoryId:  sasmeleebi.id,
        available:   false,
      },
    ],
  });
 
  console.log('✅ Seed დასრულდა!');
}
 
main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
