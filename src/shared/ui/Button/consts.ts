export const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

export const variantsDetails: Record<(typeof variants)[number], string> = {
  default: "Обычная кнопка",
  secondary:
    "Используется рядом с обычной кнопкой, если нужен второй её вариант",
  destructive: "Кнопка связанная с уничтожением чего-либо",
  ghost: "Полупрозрачная кнопка",
  link: "Кнопка для ссылок",
  outline: "Кнопка с бордером",
};

export const sizes = ["default", "sm", "lg", "icon"] as const;
export const sizesDetails: Record<(typeof sizes)[number], string> = {
  default: "Обычная кнопка",
  sm: "Маленькая кнопка",
  lg: "Большая кнопка",
  icon: "Квадратная кнопка для иконки",
};
