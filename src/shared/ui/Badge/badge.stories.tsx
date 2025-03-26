import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { variantsBadge } from "./consts";

const meta = {
  title: "shared/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variantsBadge,
    },
    asChild: {
      table: { disable: true },
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Значок",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Default: Story = {
  args: {
    children: "Стандартный",
    variant: "default"
  }
};

export const Secondary: Story = {
  args: {
    children: "Второстепенный",
    variant: "secondary"
  }
};

export const Destructive: Story = {
  args: {
    children: "Деструктивный",
    variant: "destructive"
  }
};

export const Outline: Story = {
  args: {
    children: "С границей",
    variant: "outline"
  }
};

export const RandomColor: Story = {
  args: {
    children: "Случайный Цвет",
    variant: "random-color"
  }
};
