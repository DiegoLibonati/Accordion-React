import { useState } from "react";

import { Question as QuestionT } from "./entities/entities";

import { Question } from "./components/Question/Question";

import questions from "./helpers/data";

import "./App.css";

function App(): JSX.Element {
  const [question] = useState<QuestionT[]>(questions);

  return (
    <main className="w-screen h-screen bg-[#fafafa]">
      <section className="w-full h-full">
        <article className="flex items-center justify-center flex-col w-full h-full">
          {question.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
