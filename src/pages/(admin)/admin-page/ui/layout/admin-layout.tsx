import { Toaster } from "@/shared/ui";
import type { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="w-screen h-screen">
      {children} <Toaster />
    </div>
  );
}
