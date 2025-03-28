import type { Meta, StoryObj } from "@storybook/react";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "../Input/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/card";
import { Button, buttonVariants } from "../Button/button";
import { SonnerDecorator } from "@/shared/config/storybook/decorators";
import { Label } from "../Label/label";
import {
  ChevronsLeftRightEllipsis,
  Grid2X2Check,
  Layers,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Textarea } from "../Textarea/textarea";
import { Switch } from "../Switch/switch";
import { Large } from "../Typography";
import { cn } from "@/shared/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select/select";
import { Checkbox } from "../Checkbox/checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup/radio-group";
import { Badge } from "../Badge/badge";

const GENDERS = ["Не указан", "Муж.", "Жен."] as const;
const CONTACT_METHOD = [
  {
    id: "phone",
    label: (
      <>
        Телефон <Phone className="inline-block" />
      </>
    ),
  } as const,
  {
    id: "sms",
    label: (
      <>
        SMS <MessageCircle className="inline-block" />
      </>
    ),
  } as const,
  {
    id: "telegram",
    label: (
      <>
        Telegram <Send className="inline-block" />
      </>
    ),
  } as const,
] as const;

const LEARNING_TYPE = [
  {
    id: "frontend",
    content: (
      <>
        Фронтенд <Grid2X2Check className="inline-block" />
      </>
    ),
  },
  {
    id: "backend",
    content: (
      <>
        Бэкенд <ChevronsLeftRightEllipsis className="inline-block" />
      </>
    ),
  },
  {
    id: "fullstack",
    content: (
      <>
        Фуллстэк <Layers className="inline-block" />
      </>
    ),
  },
] as const;

const formSchema1 = z.object({
  username: z
    .string({ message: "Имя должно быть текстовым" })
    .min(2, { message: "Имя должно содержать хотя бы 2 символа" })
    .max(50, { message: "Имя не должно быть больше 50 символов" }),
  description: z
    .string()
    .max(250, { message: "Максимум 250 символов" })
    .optional(),
  gender: z.enum(GENDERS, {
    message: "не действительный пол",
    required_error: "Укажите пол",
  }),
  contacts: z
    .array(z.enum(["telegram", "sms", "phone"] as const))
    .min(1, { message: "Выберите хотя бы один способ связи" }),
  learning: z.enum(["frontend", "backend", "fullstack"] as const, {
    message: "Недействительная форма обучения",
  }),
  subscribe: z.boolean(),
});

const meta = {
  title: "shared/Form",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllInputForm: Story = {
  decorators: [SonnerDecorator],
  render() {
    return <Form1 />;
  },
};

const Form1 = () => {
  const form = useForm<z.infer<typeof formSchema1>>({
    resolver: zodResolver(formSchema1),
    defaultValues: {
      username: "",
      description: "",
      subscribe: true,
      gender: undefined,
      contacts: [],
      learning: "frontend",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema1>) {
    toast(<pre>Отправлено: {JSON.stringify(values, null, 2)}</pre>);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Форма сторибук</CardTitle>
        <CardDescription>
          Здесь представлены все поддерживаемые поля
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <CardContent className="flex flex-col gap-4">
            <>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя пользователя</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Введите имя пользователя"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Под этим именем вас будут видеть пользователи
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пол</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="cursor-pointer">
                          <SelectValue placeholder="Выберите пол" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {GENDERS.map((value) => (
                          <SelectItem
                            className="cursor-pointer"
                            value={value}
                            key={value}
                          >
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Пол можно будет поменять в настройках с разрешения
                      администрации
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Опишите себя</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Описание" {...field} />
                    </FormControl>
                    <FormDescription>Необязательно</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="learning"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Выберите форму обучения</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        orientation="horizontal"
                        className="flex justify-between"
                      >
                        {LEARNING_TYPE.map((val) => (
                          <FormItem className="flex items-center" key={val.id}>
                            <FormLabel>
                              <Badge
                                className="transition-none cursor-pointer"
                                variant={
                                  field.value === val.id
                                    ? "random-color"
                                    : "outline"
                                }
                                textToColor={val.id}
                              >
                                {val.content}
                              </Badge>
                            </FormLabel>
                            <FormControl>
                              <RadioGroupItem
                                className="cursor-pointer"
                                value={val.id}
                              />
                            </FormControl>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contacts"
                render={() => (
                  <FormItem>
                    <div className="space-y-1">
                      <FormLabel>Как с вами связаться?</FormLabel>
                      <FormDescription>
                        Выберите хотя бы один способ связи
                      </FormDescription>
                    </div>
                    {CONTACT_METHOD.map((val) => (
                      <FormField
                        key={val.id}
                        control={form.control}
                        name="contacts"
                        render={({ field }) => (
                          <FormItem
                            key={val.id}
                            className="flex flex-row items-stretch gap-3"
                          >
                            <FormLabel
                              className={
                                "min-w-36 cursor-pointer " +
                                (field.value.includes(val.id)
                                  ? buttonVariants({
                                      variant: "outline",
                                    })
                                  : buttonVariants({ variant: "ghost" }))
                              }
                            >
                              <FormControl>
                                <Checkbox
                                  className="cursor-pointer"
                                  checked={field.value?.includes(val.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, val.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== val.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <div className="mr-auto">{val.label}</div>
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subscribe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="cursor-pointer">
                      <Card
                        className={cn("w-full transition-transform", {
                          "shadow-sm/40 border-muted/20": !field.value,
                          "shadow-md border-muted translate-y-[-2px]":
                            field.value,
                        })}
                      >
                        <CardContent className="flex flex-row items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <Large>Получать Новости?</Large>
                            <FormDescription className="w-56">
                              К вам в личный кабинет будут поступать новости о
                              нас
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              className="cursor-pointer"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </CardContent>
                      </Card>
                    </FormLabel>
                  </FormItem>
                )}
              />
            </>
          </CardContent>
          <CardFooter>
            <CardAction className="flex w-full justify-end">
              <Button type="submit" className="cursor-pointer" id="submit">
                Отправить
                <Label className="flex cursor-pointer" htmlFor="submit">
                  <Send className="inline-block" />
                </Label>
              </Button>
            </CardAction>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
