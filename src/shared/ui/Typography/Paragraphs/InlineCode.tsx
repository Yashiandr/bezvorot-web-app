import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const InlineCode = ({ className, ...props }: ComponentProps<"code">) => {
  return (
    <code
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    />
  );
};
