import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const P = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    />
  );
};
