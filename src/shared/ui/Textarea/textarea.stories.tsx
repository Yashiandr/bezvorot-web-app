import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./textarea";

const meta = {
  title: "shared/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", table: { category: "ux" } },
    disabled: { control: "boolean", table: { category: "ux" } },
  },
  args: {
    placeholder: "Поле ввода текста",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Disabled: Story = {
  args: {
    placeholder: "Отключенное поле ввода",
    disabled: true,
  },
};
