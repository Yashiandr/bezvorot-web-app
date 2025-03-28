import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export const NameInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  className,
}: Pick<ControllerProps<TFieldValues, TName>, "control" | "name"> & {
  className?: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>Название производителя</FormLabel>
          <FormControl>
            <Input placeholder="производитель..." {...field} />
          </FormControl>
          <FormDescription>Введите название производителя</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
