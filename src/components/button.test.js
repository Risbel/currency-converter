import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders a button with the default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "rounded-md font-semibold text-slate-300 bg-gray-800 border border-gray-600 transition-shadow hover:shadow-xl active:opacity-90 py-2 px-4"
    );
    expect(button).toHaveTextContent("Click me");
  });

  test("renders a disabled button", () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "rounded-md font-semibold text-slate-300 bg-gray-800 border border-gray-600 py-2 px-4 bg-gray-700 opacity-60"
    );
  });

  test("renders a button with secondary variant", () => {
    render(<Button variant="secondary">Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "rounded-md font-semibold text-slate-900 bg-gray-200 transition-shadow hover:shadow-xl active:opacity-90 py-2 px-4"
    );
  });

  test("triggers onClick event when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
