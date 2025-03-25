import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";

export const Large = ({ className, ...props }: ComponentProps<"div">) => {
  return <div {...props} className={cn("text-lg font-semibold", className)} />;
};
