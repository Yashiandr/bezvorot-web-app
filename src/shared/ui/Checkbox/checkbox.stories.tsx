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

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const Checked: Story = {
  args: {
    disabled: false,
    checked: true,
  },
};

export const DefaultDark: Story = {
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};

export const DisabledDark: Story = {
  ...Disabled,
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};

export const CheckedDisabledDark: Story = {
  ...CheckedDisabled,
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};

export const CheckedDark: Story = {
  ...Checked,
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};
