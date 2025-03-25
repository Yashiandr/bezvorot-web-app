import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const H4 = ({ className, ...props }: ComponentProps<"h4">) => {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    />
  );
};
