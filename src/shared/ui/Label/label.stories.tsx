import { Label } from "@radix-ui/react-label";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Switch } from "../Switch/switch";
import { RadioGroup, RadioGroupItem } from "../RadioGroup/radio-group";
import { Book, Tv2, Footprints } from "lucide-react";
import { Checkbox } from "../Checkbox/checkbox";
import { Large, Small } from "../Typography";
import { Card, CardContent } from "../Card/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select/select";
import { Textarea } from "../Textarea/textarea";

const meta = {
  title: "shared/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    htmlFor: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelWithInput: Story = {
  args: {
    children: "Имя:",
  },
  render(args) {
    return (
      <div>
        <Label className="ml-1" htmlFor="name" {...args} />
        <Input placeholder="Введите ваше имя" id="name" />
      </div>
    );
  },
};

export const LabelWithButton: Story = {
  args: {
    children: "Удалить аккаунт",
  },
  render(args) {
    return (
      <div className="flex gap-x-2 items-center">
        <Label className="" htmlFor="delete-account" {...args} />
        <Button variant={"destructive"} size={"sm"} id="delete-account">
          Удалить
        </Button>
      </div>
    );
  },
};

export const LabelWithSwitch: Story = {
  args: {
    children: "Активировать",
  },
  render(args) {
    return (
      <div className="flex gap-x-2 items-center">
        <Label className="" htmlFor="toggle-active" {...args} />
        <Switch id="toggle-active" />
      </div>
    );
  },
};

export const LabelWithRadioGroup: Story = {
  render() {
    const radioGroupValue = [
      {
        value: "Чтение книг",
        label: (
          <>
            Чтение книг <Book className="inline-block" />
          </>
        ),
      },
      {
        value: "Просмотр кино",
        label: (
          <>
            Просмотр кино <Tv2 className="inline-block" />
          </>
        ),
      },
      {
        value: "Прогулка",
        label: (
          <>
            Прогулка <Footprints className="inline-block" />
          </>
        ),
      },
    ];
    return (
      <RadioGroup>
        {radioGroupValue.map((value) => (
          <div key={value.value} className="flex items-center space-x-2">
            <RadioGroupItem value={value.value} id={value.value} />
            <Label htmlFor={value.value}>{value.label}</Label>
          </div>
        ))}
      </RadioGroup>
    );
  },
};

export const LabelWithCheckbox: Story = {
  render() {
    return (
      <Label htmlFor="term">
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Checkbox id="term" />
            <div className="w-[400px]">
              <Large>Принять политику конфидециальности</Large>
              <Small>
                Вы соглашаетесь с обработкой персональных данных в соответствии
                с Политикой конфиденциальности.
              </Small>
            </div>
          </CardContent>
        </Card>
      </Label>
    );
  },
};

export const LabelWithSelect: Story = {
  render() {
    const selectValues = ["Бесплатная", "Индвидуальная", "Корпоративная"];
    return (
      <div className="flex items-center gap-x-2">
        <Select>
          <SelectTrigger id="sub">
            <SelectValue placeholder="Тип подписки" />
          </SelectTrigger>
          <SelectContent>
            {selectValues.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label htmlFor="sub">- Подписка</Label>
      </div>
    );
  },
};

export const LabelWithTextarea: Story = {
  render() {
    return (
      <div className="w-[450px] flex flex-col gap-y-2">
        <Label htmlFor="Описание">Введите описание товара</Label>
        <Textarea id="Описание" placeholder="Описание" />
      </div>
    );
  },
};
