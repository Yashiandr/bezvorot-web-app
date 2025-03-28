"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Large } from "@/shared/ui/Typography";
import type { Manufacturer } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { deleteManufacturerById } from "../../model/services/deleteManufacturerById";

export const columns: ColumnDef<Manufacturer & { count: number }>[] = [
  {
    accessorKey: "name",
    header: "Производитель",
    cell: ({ row }) => (
      <div className="flex gap-x-2 items-center text-2xl">
        <div className="relative size-12 rounded-sm bg-muted-foreground">
          <Image
            className="p-1"
            src={row.original.imageUrl || ""}
            alt={row.getValue("name")}
            fill
          />
        </div>
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "count",
    header: () => <Large>Позиций</Large>,
    cell: ({ row }) => (
      <i
        className={
          row.getValue("count")
            ? "font-bold"
            : "text-muted-foreground not-italic"
        }
      >
        {row.getValue("count")}
      </i>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <span className="sr-only">Взаимодействовать</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col items-center px-2">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <form action={deleteManufacturerById}>
              <input type="hidden" name="id" value={id} />
              <DropdownMenuItem asChild>
                <Button type="submit" variant={"destructive"}>
                  Удалить
                </Button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
