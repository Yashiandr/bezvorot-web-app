import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  SelectLabel,
} from "./select";
import { Carrot, LeafyGreen, Salad } from "lucide-react";
import { Muted } from "../Typography";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    const selectValue = [
      {
        value: "Салат",
        content: (
          <>
            <Salad className="inline-block" />
          </>
        ),
      },
      {
        value: "Морковь",
        content: (
          <>
            <Carrot className="inline-block" />
          </>
        ),
      },
      {
        value: "Зелень",
        content: (
          <>
            <LeafyGreen className="inline-block" />
          </>
        ),
      },
    ];
    return (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Выберите овощь" />
        </SelectTrigger>
        <SelectContent className="w-[200px]">
          {selectValue.map((value) => (
            <SelectItem
              className="flex items-center"
              key={value.value}
              value={value.value}
            >
              {value.content} <Muted>{value.value}</Muted>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

export const Scrollable: Story = {
  render() {
    const selectGroups = [
      {
        groupName: "Творчество",
        groupValues: [
          "Рисование",
          "Фотография",
          "Каллиграфия",
          "Лепка из глины",
          "Вязание",
          "Граффити",
          "Скрапбукинг",
        ],
      },
      {
        groupName: "Активный отдых",
        groupValues: [
          "Велоспорт",
          "Скалолазание",
          "Пейнтбол",
          "Каякинг",
          "Паркур",
          "Сёрфинг",
        ],
      },
      {
        groupName: "Интеллектуальные хобби",
        groupValues: [
          "Шахматы",
          "Программирование",
          "Изучение языков",
          "Головоломки",
          "Настольные игры",
          "Астрономия",
        ],
      },
      {
        groupName: "Музыка",
        groupValues: [
          "Игра на гитаре",
          "Вокал",
          "Диджеинг",
          "Создание битов",
          "Коллекционирование винила",
          "Саксофон",
          "Хоровое пение",
        ],
      },
      {
        groupName: "Природа",
        groupValues: [
          "Садоводство",
          "Грибная охота",
          "Пчеловодство",
          "Орнитология",
          "Флористика",
          "Походы с палатками",
        ],
      },
    ];
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Выберите увлечение" />
        </SelectTrigger>
        <SelectContent className="max-h-[250px]">
          {selectGroups.map((group) => (
            <SelectGroup key={group.groupName}>
              <SelectLabel>{group.groupName}</SelectLabel>
              {group.groupValues.map((value) => (
                <SelectItem value={value} key={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

export const Opened: Story = {
  render() {
    return (
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Сколько вам лет" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <SelectGroup key={index}>
              <SelectLabel>{`${index * 10 + 1} - ${
                (index + 1) * 10
              }`}</SelectLabel>
              {Array.from({ length: 10 }).map((_, jindex) => (
                <SelectItem
                  value={(index * 10 + jindex + 1).toString()}
                  key={jindex}
                >
                  {index * 10 + jindex + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    );
  },
};
