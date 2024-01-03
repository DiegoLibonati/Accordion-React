import { useState } from "react";
import questions from "../helpers/data";
import { Question } from "./Question";
import { Question as QuestionT } from "../entities/entities";

export const Main = (): JSX.Element => {
  const [question] = useState<QuestionT[]>(questions);

  return (
    <main className="main_container">
      <section className="faqs_container">
        <article className="faqs_container_title">
          <h1>Questions And Answers About Login</h1>
        </article>

        <article className="faqs_container_questions">
          {question.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </article>
      </section>
    </main>
  );
};
