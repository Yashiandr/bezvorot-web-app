import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";
import { variants, variantsDetails, sizesDetails, sizes } from "./consts";
import { StorybookTypeDetails } from "@/shared/config/storybook/utils/details-object";
import { CarrotIcon } from "lucide-react";

const variantsTypeDetails = new StorybookTypeDetails(
  variantsDetails
).toString();
const sizesTypeDetails = new StorybookTypeDetails(sizesDetails).toString();

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    asChild: { table: { disable: true } },
    onClick: { table: { disable: true } },
    children: {
      if: { arg: "size", neq: "icon" },
      table: {
        category: "ux",
        type: { summary: "Может быть текстом или ReactNode" },
      },
      control: "text",
    },
    variant: {
      table: {
        category: "ui",
        type: {
          summary: "Определяет внешний вид кнопки",
          detail: variantsTypeDetails,
        },
      },
      control: "inline-radio",
      options: variants,
    },
    size: {
      table: {
        category: "ui",
        type: {
          summary: "Определяет размер кнопки",
          detail: sizesTypeDetails,
        },
      },
      control: "inline-radio",
      options: sizes,
    },
  },
  args: { onClick: fn(), children: "Кнопка" },
  render(args) {
    if (args.size === "icon") {
      return (
        <Button {...args}>
          <CarrotIcon />
        </Button>
      );
    }
    return <Button {...args} />;
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Default: Story = {
  args: {
    children: "Обычная",
    variant: "default",
    size: "default",
  },
};

export const SmButton: Story = {
  args: {
    children: "Маленькая",
    variant: "default",
    size: "sm",
  },
};

export const LgButton: Story = {
  args: {
    children: "Большая",
    variant: "default",
    size: "lg",
  },
};

export const IconButton: Story = {
  args: {
    variant: "default",
    size: "icon",
  },
};

export const DestructiveButton: Story = {
  args: {
    children: "Деструктивная",
    variant: "destructive",
    size: "default",
  },
};

export const BorderButton: Story = {
  args: {
    children: "С границей",
    variant: "outline",
    size: "default",
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "Второстепенная",
    variant: "secondary",
    size: "default",
  },
};

export const GhostButton: Story = {
  args: {
    children: "Прозрачная",
    variant: "ghost",
    size: "default",
  },
};

export const LinkButton: Story = {
  args: {
    children: "Ссылка",
    variant: "link",
    size: "default",
  },
};
