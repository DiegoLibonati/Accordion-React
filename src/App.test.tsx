import { screen, render } from "@testing-library/react";

import App from "./App";

import questions from "./helpers/data";

import "@testing-library/jest-dom";

const renderComponent = (): { container: HTMLElement } => {
  const { container } = render(<App />);

  return {
    container: container,
  };
};

test("All questions must be rendered.", () => {
  renderComponent();

  const questionElements = screen.getAllByTestId("question");

  expect(questionElements).toHaveLength(questions.length);
});

test("All questions must be closed.", () => {
  renderComponent();

  const closeButton = screen.queryAllByRole("button", {
    name: /close question/i,
  });

  expect(closeButton).toHaveLength(0);
});
