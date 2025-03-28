import type { Meta, StoryObj } from "@storybook/react";
import type { Component, ComponentProps } from "react";
import { variantTypography, variantTypographyTags } from "./consts";
import { TypographyTable } from "./Components/TypographyTable";
import { H1 } from "./Headers/H1";
import { P } from "./Paragraphs/P";
import { Bold } from "./Paragraphs/Bold";
import { Blockquote } from "./Paragraphs/Blockquote";
import { H2 } from "./Headers/H2";
import { H3 } from "./Headers/H3";
import { TypographyList } from "./Components/TypographyList";
import { Lead } from "./Paragraphs/Lead";
import { H4 } from "./Headers/H4";

type TypographyProps<T extends (typeof variantTypography)[number]> = {
  variant: T;
  values: string[];
  author: string;
  tableValues: Record<string, string[]>;
} & ComponentProps<T>;

const tableData: Record<string, string[]> = {
  Характеристика: ["Товар 1", "Товар 2", "Товар 3", "Товар 4"],
  Цвет: ["Красный", "Синий", "Зелёный", "Жёлтый"],
  "Размер (см)": ["10", "15", "20", "25"],
  "Вес (кг)": ["1.2", "1.5", "1.8", "2.0"],
  Материал: ["Пластик", "Металл", "Дерево", "Стекло"],
  "Дата выпуска": ["2020-01-01", "2021-05-15", "2022-08-20", "2023-03-10"],
  "Гарантия (лет)": ["1", "2", "3", "5"],
};

const listData = [
  "Красный — яркий цвет, символизирует энергию, страсть и силу, привлекает внимание.",
  "Синий — спокойный цвет, ассоциируется с небом и морем, вызывает чувства надежности и умиротворения.",
  "Зелёный — цвет природы, символизирует свежесть, рост и гармонию, вызывает чувство покоя.",
  "Жёлтый — солнечный цвет, часто ассоциируется с радостью, счастьем и оптимизмом.",
  "Фиолетовый — глубокий цвет, символизирует творчество, мистицизм и духовность, вызывает ассоциации с роскошью.",
  "Оранжевый — яркий и тёплый цвет, символизирует энергию, творчество и вдохновение.",
];

const meta = {
  title: "shared/Typography",
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variantTypography,
    },
    children: {
      control: "text",
      if: { arg: "variant", neq: "table" },
    },
    tableValues: {
      if: { arg: "variant", eq: "table" },
      control: "object",
    },
    values: {
      if: { arg: "variant", eq: "ul" },
      control: "object",
    },
    author: {
      if: { arg: "variant", eq: "blockquote" },
      control: "text",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    tableValues: tableData,
    values: listData,
  },
  render({ variant, tableValues, values, ...args }) {
    if (variant === "table") {
      return (
        <TypographyTable className={args.className} tableValues={tableValues} />
      );
    }
    if (variant === "ul") {
      return <TypographyList values={values} className={args.className} />;
    }
    const Tag = variantTypographyTags[variant];
    return <Tag {...args} />;
  },
} satisfies Meta<
  typeof Component<TypographyProps<(typeof variantTypography)[number]>>
>;

export default meta;
type Story = StoryObj<TypographyProps<(typeof variantTypography)[number]>>;

export const Header1: Story = {
  args: {
    variant: "h1",
    children: "Заголовок H1",
  },
};
export const Header2: Story = {
  args: {
    variant: "h2",
    children: "Заголовок H2",
  },
};
export const Header3: Story = {
  args: {
    variant: "h3",
    children: "Заголовок H3",
  },
};
export const Header4: Story = {
  args: {
    variant: "h4",
    children: "Заголовок H4",
  },
};
export const Paragraph: Story = {
  args: {
    variant: "p",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime repudiandae, dolorem dolorum obcaecati eligendi minus nihil officia possimus facilis iure amet temporibus iusto asperiores adipisci cupiditate repellendus placeat explicabo.",
  },
};

export const BlockquoteExample: Story = {
  args: {
    variant: "blockquote",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime repudiandae, dolorem dolorum obcaecati eligendi minus nihil officia possimus facilis iure amet temporibus iusto asperiores adipisci cupiditate repellendus placeat explicabo.",
  },
};

export const Table: Story = {
  args: {
    variant: "table",
  },
};

export const ListExample: Story = {
  args: {
    variant: "ul",
  },
};

export const InlineCode: Story = {
  args: {
    variant: "code",
    children: "sudo rm -rf",
  },
};

export const Leading: Story = {
  args: {
    variant: "lead",
    children:
      "Дверь используется для защиты, обеспечения конфиденциальности и контроля доступа, а также для улучшения изоляции.",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Вы уверены в выборе?",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Электронная почта",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Введите свой адрес",
  },
};

export const Bolded: Story = {
  args: {
    variant: "b",
    children: "Железная дверь",
  },
};

export const Example: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render() {
    const listData1 = [
      "Капибары могут плавать под водой до 5 минут.",
      "Они являются отличными пловцами, а их перепонки между пальцами помогают эффективно передвигаться по воде.",
      "Капибары могут двигаться по суше со скоростью до 35 км/ч.",
    ];
    const listData2 = [
      "Питаются преимущественно травами и водными растениями.",
      "Могут есть кору деревьев, если трава не доступна.",
      "У капибар есть предрасположенность к ночному активному питанию.",
    ];
    const listData3 = [
      "Капибары часто общаются друг с другом с помощью звуков.",
      "Эти животные любят купаться и могут погружаться в воду.",
      "Несмотря на свою большую массу, капибары очень быстрые и манёвренные.",
    ];
    const tableData: Record<string, string[]> = {
      Характеристика: ["Значение", "Описание", "Примечание"],
      Размер: ["1.1-1.3 м", "Длина тела капибары", "Крупнейший грызун"],
      Вес: ["35–65 кг", "Средний вес взрослых особей", "Зависит от пола"],
      "Продолжительность Жизни": [
        "6–12 лет",
        "В дикой природе или неволе",
        "В неволе дольше",
      ],
    };
    return (
      <div className="w-3/5 mx-auto min-w-[400px] py-12">
        <H1>Всё, что нужно знать о капибарах</H1>
        <P>
          <Bold className="text-lg font-semibold">Капибары</Bold> — это
          крупнейшие
          <Bold> грызуны</Bold> в мире, которые завоевали популярность благодаря
          своей дружелюбной натуре и необычайной способности к социализации. Эти
          животные обитают в <Bold>Южной Америке</Bold> и могут быть найдены в
          странах, таких как <Bold>Бразилия</Bold>, <Bold>Венесуэла</Bold> и{" "}
          <Bold>Колумбия</Bold>.
        </P>
        <Blockquote author="Джонатан Леви, зоолог">
          &quot;Капибары — самые миролюбивые и социальные животные, с которыми я
          когда-либо сталкивался.&quot;
        </Blockquote>
        <H2 className="mt-10">Где обитают капибары?</H2>
        <P>
          Капибары предпочитают влажные и водоёмные территории, такие как
          болота, реки и озёра. Они прекрасно адаптированы к жизни в водной
          среде, но могут также проводить время на суше.
        </P>
        <H3 className="mt-5">Влажные зоны</H3>
        <P>
          Влажные зоны — это идеальная среда для жизни капибар. Они могут
          находиться в воде большую часть времени, часто погружаясь в неё, чтобы
          охладиться или спрятаться от хищников.
        </P>
        <H3 className="mt-5">Пищевые привычки капибар</H3>
        <P>
          Капибары являются травоядными, предпочитая растения, травы, кору
          деревьев и водные растения. Они проводят много времени, пастись на
          травяных равнинах, и часто могут быть замечены в группах, что также
          помогает им защищаться от хищников.
        </P>
        <H2 className="mt-10">Социальная структура капибар</H2>
        <P>
          Капибары — это социальные животные, которые живут в группах от 10 до
          20 особей. В этих группах существует чёткая иерархия, и животные
          проявляют высокую степень взаимопомощи.
        </P>
        <H3 className="mt-5">Групповые взаимодействия</H3>
        <P>
          Группы капибар взаимодействуют друг с другом с помощью различных
          звуков, жестов и поведения. Они часто ухаживают друг за другом, что
          укрепляет их социальные связи.
        </P>
        <H3 className="mt-5">Интерес к людям</H3>
        <P>
          Одной из удивительных черт капибар является их дружелюбие к людям. Эти
          животные не боятся людей и часто подходят к ним для общения или даже
          поглаживания.
        </P>
        <H2 className="mt-10">Структура жизни и продолжительность</H2>
        <P>
          Капибары имеют довольно продолжительную жизнь для своих размеров. Они
          живут в среднем около 6-12 лет в дикой природе и могут достигать
          возраста 10 лет в неволе.
        </P>
        <H3 className="mt-5">Размножение</H3>
        <P>
          Капибары достигают половой зрелости в возрасте около 1-2 лет.
          Размножение у них происходит в основном в период с января по март, и
          они могут рожать до 8 детёнышей.
        </P>
        <H3 className="mt-5">Поведение на суше</H3>
        <P>
          На суше капибары часто ведут спокойный образ жизни, лежа на тёплом
          песке или в тени деревьев. Однако, когда угроза становится очевидной,
          они стремительно убегают в воду, где их легче защитить.
        </P>
        <H2 className="mt-10">Интересные факты о капибарах</H2>
        <TypographyList values={listData1} />
        <TypographyTable tableValues={tableData} />
        <Lead className="text-center">
          Таблица: Основные характеристики капибар
        </Lead>
        <H3 className="mt-5">Два списка интересных фактов</H3>
        <H4 className="mt-5">Особенности питания капибар:</H4>
        <TypographyList values={listData2} />
        <H4>Поведение капибар:</H4>
        <TypographyList values={listData3} />
        <H2 className="mt-10">Заключение</H2>
        <P>
          Капибары — это удивительные животные, которые отличаются своей
          дружелюбной природой и высокой адаптивностью к различным условиям
          жизни. Они не только привлекают внимание людей своей милой внешностью,
          но и заслуживают уважения за свою способность адаптироваться к жизни в
          воде и на суше. Будучи социальными существами, капибары продолжают
          завоёвывать сердца людей по всему миру.
        </P>
      </div>
    );
  },
};

export const ExampleDark: Story = {
  ...Example,
  parameters: {
    ...Example.parameters,
    theme: "dark",
    docs: {
      disable: true,
    },
  },
};
