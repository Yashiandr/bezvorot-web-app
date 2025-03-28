"server only";

import { prisma } from "@/shared/lib/prisma";
import { unstable_cache } from "next/cache";

export const getAllManufacturersForDataTable = unstable_cache(async () => {
  const manufacturers = await prisma.manufacturer.findMany({
    include: {
      _count: {
        select: {
          products: true,
        },
      },
    },
  });

  return manufacturers.map((value) => {
    return {
      id: value.id,
      name: value.name,
      imageUrl: value.imageUrl,
      count: value._count.products,
    };
  });
});
