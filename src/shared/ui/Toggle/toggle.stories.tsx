import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";
import { Carrot } from "lucide-react";
import { sizeTypes, variantTypes } from "./consts";
import type { ComponentProps } from "react";

const meta = {
  title: "shared/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
    variant: { control: "inline-radio", options: variantTypes },
    size: { control: "inline-radio", options: sizeTypes },
    text: { control: "text", if: { arg: "text", truthy: true } },
  },
  args: {
    children: <Carrot />,
  },
} satisfies Meta<ComponentProps<typeof Toggle> & { text: string }>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Discovery: Story = {};

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "outline",
  },
};

export const Large: Story = {
  args: {
    variant: "outline",
    size: "lg",
  },
};

export const WithText: StoryObj<
  ComponentProps<typeof Toggle> & { text: string }
> = {
  args: {
    text: "Морковка",
  },
  render({ children, text, ...args }) {
    return (
      <Toggle {...args}>
        {children} {text}
      </Toggle>
    );
  },
};
