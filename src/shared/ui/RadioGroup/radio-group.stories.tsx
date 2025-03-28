import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta = {
  title: "shared/Radio Group",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <RadioGroup>
        {Array.from({ length: 3 }).map((_, index) => (
          <RadioGroupItem value={index.toString()} key={index} />
        ))}
      </RadioGroup>
    );
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  parameters: {
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};
