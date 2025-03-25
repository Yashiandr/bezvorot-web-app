import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

type TypographyTableProps = {
  tableValues: Record<string, string[]>;
} & ComponentProps<"div">;

export const TypographyTable = ({
  className,
  tableValues,
  ...props
}: TypographyTableProps) => {
  const tableHeaders = Object.keys(tableValues);

  return (
    <div {...props} className={cn("my-6 w-full overflow-y-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {tableHeaders[0]}
            </th>
            {tableValues[tableHeaders[0]].map((header, index) => (
              <th
                key={index}
                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableHeaders.slice(1).map((header, index) => (
            <tr className="m-0 border-t p-0 even:bg-muted" key={index}>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {tableHeaders[index + 1]}
              </td>
              {tableValues[header].map((value, index) => (
                <td
                  key={index}
                  className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
