import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { dirValues, orientationValues } from "./consts";

const meta = {
  title: "shared/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    asChild: { table: { disable: true } },
    orientation: {
      control: "inline-radio",
      options: orientationValues,
    },
    defaultValue: {
      control: "object",
    },
    min: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
    max: {
      control: {
        type: "number",
        min: 1,
        max: 1000,
      },
    },
    step: {
      control: {
        type: "number",
        min: 0.1,
        max: 10,
      },
    },
    minStepsBetweenThumbs: {
      control: {
        type: "number",
        min: 0,
        max: 10,
      },
    },
    disabled: {
      control: "boolean",
    },
    dir: {
      control: "inline-radio",
      options: dirValues,
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
  },
  render(args) {
    return (
      <div className="w-[250px] h-[250px] flex items-center justify-center">
        <Slider {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Discovery: Story = {};

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
  },
};

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "vertical",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
    disabled: true,
  },
};

export const RightToLeft: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "rtl",
  },
};

export const WithTwoThumbs: Story = {
  args: {
    defaultValue: [50, 10],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
  },
};

export const WithThreeThumbs: Story = {
  args: {
    defaultValue: [50, 10, 25],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    minStepsBetweenThumbs: 0,
    dir: "ltr",
  },
};
