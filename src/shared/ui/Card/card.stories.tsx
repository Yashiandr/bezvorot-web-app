import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { P, Small } from "../Typography";
import { Button } from "../Button/button";

const meta = {
  title: "shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Заголовок Карточки</CardTitle>
          <CardDescription>Подзаголовок Карточки</CardDescription>
        </CardHeader>
        <CardContent>
          <P className="w-[300px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi tempore maiores.
          </P>
        </CardContent>
        <CardFooter>
          <Small>Футер карточки</Small>
        </CardFooter>
      </>
    ),
  },
};

export const WithActionCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Получите доступ к премиум контенту</CardTitle>
          <CardDescription>
            Расширьте свои возможности с премиум подпиской
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[500px]">
          <P className="indent-4 pl-2">
            Откройте для себя эксклюзивные статьи, видео и материалы. Получите
            полный доступ к премиум контенту, который поможет вам развиваться в
            выбранной области. Станьте частью закрытого клуба, где вы получите
            лучшие ресурсы для роста и обучения.
          </P>
        </CardContent>
        <CardFooter className="ml-auto">
          <CardAction>
            <Button variant={"secondary"}>Бесплатная версия</Button>
            <Button className="ml-4">Оформить подписку</Button>
          </CardAction>
        </CardFooter>
      </>
    ),
  },
};
