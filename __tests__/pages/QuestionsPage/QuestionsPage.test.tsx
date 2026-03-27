import { render, screen } from "@testing-library/react";

import { mockQuestions } from "@tests/__mocks__/questions.mock";

import QuestionsPage from "@/pages/QuestionsPage/QuestionsPage";

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (): RenderPage => {
  const { container } = render(<QuestionsPage />);
  return { container };
};

describe("QuestionsPage", () => {
  it("should render a main element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("main")).toBeInTheDocument();
  });

  it("should render one Question per item in the data", () => {
    renderPage();
    expect(screen.getAllByTestId("question")).toHaveLength(mockQuestions.length);
  });

  it("should render the title of each question", () => {
    renderPage();
    mockQuestions.forEach((question) => {
      expect(screen.getByText(question.title)).toBeInTheDocument();
    });
  });
});
