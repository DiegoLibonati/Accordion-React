import React, { useState } from "react";
import questions from "../helpers/data";
import { Question } from "./Question";

export const Main = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <>
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
    </>
  );
};
