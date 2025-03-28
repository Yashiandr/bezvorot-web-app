import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Star } from "lucide-react";
import { numberToRub } from "@/shared/lib/utils/format/number-to-rub";
import { cn } from "@/shared/lib/utils";

const tableData = [
  {
    name: "Эспрессо",
    strength: "9",
    average: "120",
    popularity: "4",
  },
  {
    name: "Капучино",
    strength: "5",
    average: "180",
    popularity: "5",
  },
  {
    name: "Латте",
    strength: "4",
    average: "200",
    popularity: "4",
  },
  {
    name: "Американо",
    strength: "7",
    average: "150",
    popularity: "3",
  },
  {
    name: "Раф",
    strength: "6",
    average: "220",
    popularity: "4",
  },
  {
    name: "Флэт Уайт",
    strength: "8",
    average: "190",
    popularity: "3",
  },
];

const meta = {
  title: "shared/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTable: Story = {
  args: {
    children: (
      <>
        <TableCaption>Рейтинг популярных кофейных напитков</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Название напитка</TableHead>
            <TableHead>Крепость (из 10)</TableHead>
            <TableHead>
              Популярность (из 5
              <Star className="inline-block fill-amber-400 stroke-1" />)
            </TableHead>
            <TableHead>Средняя цена (руб)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((coffee) => (
            <TableRow key={coffee.name}>
              <TableCell className="font-medium">{coffee.name}</TableCell>
              <TableCell className="text-center">{coffee.strength}</TableCell>
              <TableCell className="flex justify-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    className={cn("inline-block stroke-1", {
                      "fill-amber-400": index < Number(coffee.popularity),
                    })}
                    key={index}
                  />
                ))}
              </TableCell>
              <TableCell className="text-right">
                {numberToRub(coffee.average)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Средняя цена кофе</TableCell>
            <TableCell className="text-right">
              {numberToRub(
                tableData.reduce(
                  (acc, coffee) => (acc += Number(coffee.average)),
                  0
                ) / tableData.length
              )}
            </TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

export const PrimaryTableDark: Story = {
  ...PrimaryTable,
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};
