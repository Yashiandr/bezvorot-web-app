import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const Lead = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p {...props} className={cn("text-xl text-muted-foreground", className)} />
  );
};
