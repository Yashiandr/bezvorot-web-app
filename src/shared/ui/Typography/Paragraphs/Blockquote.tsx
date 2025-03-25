import { cn } from "@/shared/lib/utils";
import type { ComponentProps } from "react";
import { Small } from "./Small";

export const Blockquote = ({
  className,
  children,
  author,
  ...props
}: ComponentProps<"blockquote"> & { author?: string }) => {
  const authorContent = author ? (
    <>
      <br />— <Small>{author}</Small>
    </>
  ) : null;
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
      {authorContent}
    </blockquote>
  );
};
