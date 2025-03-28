"use server";

import { prisma } from "@/shared/lib/prisma";
import { manufacturerSchema } from "@/features/(admin)/create-manufacturer-form";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

export async function actionCreateManufacturer(data: unknown) {
  const validatedData = manufacturerSchema.safeParse(data);
  if (!validatedData.success)
    return { error_message: "Недействительные данные" };
  try {
    const a = await prisma.manufacturer.create({
      data: { ...validatedData.data, imageUrl: "/default-icon.svg" },
    });
    revalidatePath("/admin/dashboard");
    return {
      message: `Производитель ${a.name} с айди ${a.id} создан`,
    };
  } catch (error) {
    console.log(error);
    if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          return {
            error_message: `Производитель с именем ${validatedData.data.name} уже существует`,
          };
      }
    }

    return {
      error_message: "Ошибка на сервере",
    };
  }
}
