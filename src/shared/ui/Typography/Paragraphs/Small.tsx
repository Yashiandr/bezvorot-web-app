import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const Small = ({ className, ...props }: ComponentProps<"small">) => {
  return (
    <small
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    />
  );
};
