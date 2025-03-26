import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "shared/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: true
  }
};

export const Checked: Story = {
  args: {
    disabled: false,
    checked: true
  }
};
