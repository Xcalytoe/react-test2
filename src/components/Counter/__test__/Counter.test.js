import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("Does component have correct name", () => {
  render(<Counter />);
  const headerEl = screen.getByTestId("header");
  expect(headerEl.textContent).toBe("My Counter");
});

// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("input default value", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId("counter-input");
  expect(inputEl.value).toBe("1");
});

test("Is default counter value zero", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("Does button have a +", () => {
  render(<Counter />);
  const plusBtnEl = screen.getByTestId("btn-plus");
  expect(plusBtnEl.textContent).toBe("+");
});

test("Subtract button text", () => {
  render(<Counter />);
  const minusBtnEl = screen.getByTestId("minus-btn");
  expect(minusBtnEl.textContent).toBe("-");
});

test("Input value onchange is correct", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId("btn-plus");
  fireEvent.change(inputEl, {
    target: {
      value: "4",
    },
  });
  expect(inputEl.value).toBe("4");
});

test("Plus button adds a value onclick", () => {
  render(<Counter />);
  const plusBtnEl = screen.getByTestId("btn-plus");
  const counterEl = screen.getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(plusBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("Minus button adds a value onclick", () => {
  render(<Counter />);
  const minusBtnEl = screen.getByTestId("minus-btn");
  const counterEl = screen.getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(minusBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("Increasing input and clicking button works correctly", () => {
  render(<Counter />);
  const minusBtnEl = screen.getByTestId("minus-btn");
  const counterEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("counter-input");
  //   expect(counterEl.textContent).toBe("0");
  fireEvent.change(inputEl, {
    target: {
      value: "1",
    },
  });
  fireEvent.click(minusBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("decreasing input and clicking button works correctly", () => {
  render(<Counter />);
  const plusBtnEl = screen.getByTestId("btn-plus");
  const counterEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("counter-input");
  fireEvent.change(inputEl, {
    target: {
      value: "2",
    },
  });
  fireEvent.click(plusBtnEl);
  expect(counterEl.textContent).toBe("2");
});
