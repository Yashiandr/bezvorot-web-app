import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";
import { typesInput, typesDetails } from "./consts";
import { StorybookTypeDetails } from "@/shared/config/storybook/utils/details-object";

const typesDetailsText = new StorybookTypeDetails(typesDetails).toString();

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", table: { category: "ux" } },
    disabled: { control: "boolean", table: { category: "ux" } },
    type: {
      control: "radio",
      options: typesInput,
      table: {
        category: "ux",
        type: { summary: "Определяет тип инпута", detail: typesDetailsText },
      },
    },
  },
  args: {
    placeholder: "Поле ввода текста",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Disabled: Story = {
  args: {
    placeholder: "Отключенное поле ввода",
    disabled: true,
  },
};

export const TypeEmail: Story = {
  args: {
    placeholder: "Поле для ввода email",
    disabled: false,
    type: "email",
  },
};

export const Hidden: Story = {
  args: {
    disabled: false,
    type: "hidden",
  },
  render(args) {
    return (
      <div>
        Где-то тут спрятался инпут
        <Input {...args} />;
      </div>
    );
  },
};

export const TypePassword: Story = {
  args: {
    placeholder: "Поле для ввода пароля",
    disabled: false,
    type: "password",
  },
};

export const TypeSearch: Story = {
  args: {
    placeholder: "Поисковое поле",
    disabled: false,
    type: "search",
  },
};

export const TypeTel: Story = {
  args: {
    placeholder: "Поле ввода телефона",
    disabled: false,
    type: "tel",
  },
};

export const TypeText: Story = {
  args: {
    placeholder: "Поле ввода текста",
    disabled: false,
    type: "text",
  },
};
