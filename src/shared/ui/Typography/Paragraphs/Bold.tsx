import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const Bold = ({ className, ...props }: ComponentProps<"b">) => {
  return <b {...props} className={cn("text-accent-foreground", className)} />;
};
