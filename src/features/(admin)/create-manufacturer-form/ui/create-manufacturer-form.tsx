"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
} from "@/shared/ui";
import { NameInput } from "./form-items/name-input";

export const CreateManufacturerForm = ({
  action,
}: {
  action: (
    data: unknown
  ) => Promise<{ message?: string; error_message?: string }>;
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const { error_message, message } = await action(values);
    if (error_message) {
      toast.error(error_message);
      return;
    }
    if (message) {
      toast.message(message);
    }
  }
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Добавить производителя</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-2">
            <NameInput control={form.control} name="name" />
          </CardContent>
          <CardFooter>
            <CardAction className="ml-auto">
              <Button type="submit">Добавить</Button>
            </CardAction>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
