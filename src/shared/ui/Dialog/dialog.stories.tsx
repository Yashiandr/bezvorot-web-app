import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "../Button/button";

const meta = {
  title: "shared/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "skip-test"],
} satisfies Meta<typeof Dialog>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button>Открыть Диалог</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Диалог</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            eligendi assumenda laboriosam hic exercitationem commodi doloremque
            soluta sapiente eius. Odio!
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"destructive"}>Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
