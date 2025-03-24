import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

test("рендер инпута и вводе текста", () => {
  render(<Input aria-label="input" />);
  const inputElement = screen.getByLabelText(/input/i) as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "123" } });
  expect(inputElement.value).toBe("123");
});
test("рендер отключенного инпута", () => {
  render(<Input aria-label="input" disabled />);

  const inputElement = screen.getByLabelText(/input/i);
  expect(inputElement).toBeDisabled();
});
test("рендер инпута с плейсхолдером", () => {
  render(<Input placeholder="123" />);
  const inputElement = screen.getByPlaceholderText("123") as HTMLInputElement;
  expect(inputElement.placeholder).toBe("123");
});
