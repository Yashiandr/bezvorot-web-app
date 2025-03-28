import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./theme-switcher";

const meta = {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
