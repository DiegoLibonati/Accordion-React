import { screen, render } from "@testing-library/react";

import App from "@src/App";

import questions from "@src/constants/data";

type RenderComponent = { container: HTMLElement };

const renderComponent = (): RenderComponent => {
  const { container } = render(<App />);

  return {
    container: container,
  };
};

describe("App.tsx", () => {
  describe("General Tests.", () => {
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
  });
});
