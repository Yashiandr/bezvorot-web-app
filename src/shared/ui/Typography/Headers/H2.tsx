import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const H2 = ({ className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    />
  );
};
