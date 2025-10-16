import { useState } from "react";

import { Question as QuestionT } from "@src/entities/app";

import { Question } from "@src/components/Question/Question";

import questionsData from "@src/constants/questions";

import "@src/pages/QuestionsPage/QuestionsPage.css";

export const QuestionsPage = () => {
  const [questions] = useState<QuestionT[]>(questionsData);

  return (
    <main className="w-screen h-screen bg-secondary">
      <section className="w-full h-full">
        <article className="flex items-center justify-center flex-col w-full h-full">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </article>
      </section>
    </main>
  );
};
