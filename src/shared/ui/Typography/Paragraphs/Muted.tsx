import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const Muted = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)} />
  );
};
