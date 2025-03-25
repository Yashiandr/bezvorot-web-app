import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const H3 = ({ className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    />
  );
};
