import { cn } from "@/shared/lib/utils";
import { type ComponentProps } from "react";

export const H1 = ({ className, ...props }: ComponentProps<"h1">) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    />
  );
};
