const formatter = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 2,
  minimumIntegerDigits: 2,
});

export function numberToRub(value: number | string) {
  return formatter.format(Number(value));
}
