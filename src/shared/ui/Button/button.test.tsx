import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

test("рендер кнопки с текстом и регистрация клика", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Кнопка</Button>);
  const buttonElement = screen.getByText(/кнопка/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("рендер отключенной кнопки", () => {
  render(<Button disabled>Отключенная кнопка</Button>);

  const buttonElement = screen.getByText(/отключенная кнопка/i);
  expect(buttonElement).toBeDisabled();
});
