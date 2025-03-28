"use server";

import { prisma } from "@/shared/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteManufacturerById = async (formData: FormData) => {
  const id = Number(formData.get("id"));

  try {
    await prisma.$transaction([
      prisma.product.deleteMany({
        where: { manufacturerId: id },
      }),
      prisma.manufacturer.delete({
        where: { id },
      }),
    ]);

    revalidatePath("/admin/dashboard");
  } catch (e) {
    throw e;
  }
};
