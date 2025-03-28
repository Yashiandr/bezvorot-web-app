import { buttonVariants } from "@/shared/ui";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        <div className="flex gap-x-2">
          <Link
            href={"/admin/create/product"}
            className={buttonVariants({ variant: "link" }) + " cursor-pointer"}
          >
            Создать продукт
          </Link>
          <Link
            href={"/admin/create/manufacturer"}
            className={buttonVariants({ variant: "link" }) + " cursor-pointer"}
          >
            Добавить производителя
          </Link>
        </div>
        <Link
          href={"/admin/dashboard"}
          className={buttonVariants({ variant: "link" })}
        >
          <LayoutDashboard /> Дэшбоард
        </Link>
      </div>
    </>
  );
}
