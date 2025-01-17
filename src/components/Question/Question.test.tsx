import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Question } from "./Question";

const renderComponent = (): {
  question: { title: string; info: string };
  container: HTMLElement;
} => {
  const question = {
    title: "¿Esta es una pregunta?",
    info: "Informacion de la pregunta",
  };

  const { container } = render(
    <Question title={question.title} info={question.info} />
  );

  return {
    question: question,
    container: container,
  };
};

const renderComponentWithQuestionOpen = async (): Promise<{
  question: { title: string; info: string };
  container: HTMLElement;
}> => {
  const question = {
    title: "¿Esta es una pregunta?",
    info: "Informacion de la pregunta",
  };

  const { container } = render(
    <Question title={question.title} info={question.info} />
  );

  const openButton = screen.getByRole("button", {
    name: /open question/i,
  });

  await user.click(openButton);

  return {
    question: question,
    container: container,
  };
};

describe("Question.tsx", () => {
  describe("When the question is closed", () => {
    test("The title must be rendered", () => {
      const { question } = renderComponent();

      const heading = screen.getByRole("heading", {
        name: question.title,
      });

      expect(heading).toBeInTheDocument();
    });

    test("The open button should be displayed.", () => {
      renderComponent();

      const openButton = screen.getByRole("button", {
        name: /open question/i,
      });

      expect(openButton).toBeInTheDocument();
    });

    test("The title container must have bg-primary className", () => {
      const { container } = renderComponent();

      // eslint-disable-next-line
      const headQuestion = container.querySelector("div > div > div");

      expect(headQuestion).toHaveClass("bg-primary");
    });

    test("The close button and the question description do not have to be rendered.", () => {
      const { question } = renderComponent();

      const information = screen.queryByText(question.info);
      const closeButton = screen.queryByRole("button", {
        name: /close question/i,
      });

      expect(information).not.toBeInTheDocument();
      expect(closeButton).not.toBeInTheDocument();
    });
  });

  describe("When the question is open", () => {
    test("The close button should be displayed.", async () => {
      await renderComponentWithQuestionOpen();

      const closeButton = screen.getByRole("button", {
        name: /close question/i,
      });

      expect(closeButton).toBeInTheDocument();
    });

    test("The description must be rendered.", async () => {
      const { question } = await renderComponentWithQuestionOpen();

      const description = screen.getByText(question.info);

      expect(description).toBeInTheDocument();
    });

    test("The title container should be painted with bg-primary", async () => {
      const { container } = await renderComponentWithQuestionOpen();

      // eslint-disable-next-line
      const headQuestion = container.querySelector("div > div > div");

      expect(headQuestion).toHaveClass("bg-primary");
    });

    test("The open button should not be rendered.", async () => {
      await renderComponentWithQuestionOpen();

      const openButton = screen.queryByRole("button", {
        name: /open question/i,
      });

      expect(openButton).not.toBeInTheDocument();
    });
  });
});
