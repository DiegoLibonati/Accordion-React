import { screen, render } from "@testing-library/react";

import { QuestionsPage } from "@src/pages/QuestionsPage/QuestionsPage";

import questions from "@src/constants/questions";

type RenderComponent = { container: HTMLElement };

const renderComponent = (): RenderComponent => {
  const { container } = render(<QuestionsPage />);

  return {
    container: container,
  };
};

describe("QuestionsPage.tsx", () => {
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
