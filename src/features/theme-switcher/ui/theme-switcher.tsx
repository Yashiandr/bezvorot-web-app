"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { memo, type ComponentProps } from "react";

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
  ...props
}: Omit<ComponentProps<"button">, "onClick" | "children">) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      {...props}
      className={cn("cursor-pointer", className)}
      variant={"secondary"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
});
