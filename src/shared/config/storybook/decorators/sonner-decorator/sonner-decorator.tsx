import { Toaster } from "@/shared/ui";
import type { Decorator } from "@storybook/react";

export const SonnerDecorator: Decorator = (Story) => {
  return (
    <>
      <Story />
      <Toaster />
    </>
  );
};
