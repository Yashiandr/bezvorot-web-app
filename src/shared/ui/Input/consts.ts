export const typesInput = [
  "email",
  "hidden",
  "password",
  "search",
  "tel",
  "text",
] as const;

export const typesDetails: Record<(typeof typesInput)[number], string> = {
  email: "Поле для ввода email",
  hidden: "Спрятанное поле для form",
  password: "Поле для ввода пароля",
  search: "Поле для поисковых запросов",
  tel: "Поле для ввода телефона (желательно наличия pattern)",
  text: "Поле для ввода текста",
};
