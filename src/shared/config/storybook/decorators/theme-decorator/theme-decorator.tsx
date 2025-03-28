import { ThemeProvider } from "@/app/providers";
import type { ThemeType } from "@/shared/types";
import type { Decorator } from "@storybook/react";
import { useEffect, useState } from "react";

export const ThemeDecorator: Decorator = function ThemeDecorator(
  Story,
  context
) {
  const [newTheme, setNewTheme] = useState<ThemeType>("light");
  useEffect(() => {
    setNewTheme(context.parameters.theme || context.globals.theme || undefined);
  }, [context.globals.theme, context.parameters.theme]);

  return (
    <ThemeProvider forcedTheme={newTheme} enableColorScheme attribute={"class"}>
      <Story />
    </ThemeProvider>
  );
};
