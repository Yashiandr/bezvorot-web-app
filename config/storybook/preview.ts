import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/theme-decorator/theme-decorator";
import "../../src/app/styles/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Темная/светлая",
      toolbar: {
        items: [
          { value: "dark", title: "Темная", icon: "circle" },
          { value: "light", title: "Светлая", icon: "circlehollow" },
          { value: 0, title: "Контроль компонентами", icon: "close" },
        ],
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [ThemeDecorator],
};

export default preview;
