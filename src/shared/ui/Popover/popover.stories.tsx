import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { Button } from "../Button/button";
import { H4, P } from "../Typography";

const meta = {
  title: "shared/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "skip-test"],
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render(args) {
    return (
      <Popover {...args}>
        <PopoverTrigger>
          <Button>Открыть Поповер</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <H4>Поповер</H4>
            <P>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, error sapiente. Quam quo laborum aliquid possimus
              dolore impedit magni sit.
            </P>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const WithAnchor: Story = {
  render(args) {
    return (
      <div className="h-96 flex flex-col justify-between">
        <Popover {...args}>
          <PopoverTrigger>
            <Button>Открыть Поповер</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <H4>Поповер</H4>
              <P>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, error sapiente. Quam quo laborum aliquid possimus
                dolore impedit magni sit.
              </P>
            </div>
          </PopoverContent>
          <PopoverAnchor>Якорь</PopoverAnchor>
        </Popover>
      </div>
    );
  },
};
