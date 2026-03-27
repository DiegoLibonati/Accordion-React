import { useState } from "react";

import { Question as QuestionT } from "@/types/app";

import Question from "@/components/Question/Question";

import questionsData from "@/constants/questions";

const QuestionsPage = () => {
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

export default QuestionsPage;
