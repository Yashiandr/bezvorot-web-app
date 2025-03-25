import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

type TypographyListProps = {
  values: string[];
} & ComponentProps<"ul">;

export const TypographyList = ({
  className,
  values,
  ...props
}: TypographyListProps) => {
  return (
    <ul {...props} className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {values.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};
