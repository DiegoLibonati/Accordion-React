import { useState } from "react";

import { BsPlusCircle, BsPatchMinus } from "react-icons/bs";

interface QuestionProps {
  title: string;
  info: string;
}

export const Question = ({ title, info }: QuestionProps): JSX.Element => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleShowInformation: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div
      className="flex items-center justify-center w-[85%] flex-col rounded-lg border-[.1rem] border-white mb-2 md:w-[50%]"
      data-testid="question"
    >
      <div
        className={`flex flex-row items-center justify-between w-full bg-primary p-2 ${
          showDescription ? "rounded-tr-lg rounded-tl-lg" : "rounded-lg"
        }`}
      >
        <h2 className="text-sm font-medium text-white">{title}</h2>
        {!showDescription ? (
          <button
            type="button"
            aria-label="open question"
            onClick={handleShowInformation}
          >
            <BsPlusCircle fontWeight={600} fill="#ffffff"></BsPlusCircle>
          </button>
        ) : (
          <button
            type="button"
            aria-label="close question"
            onClick={handleShowInformation}
          >
            <BsPatchMinus fontWeight={600} fill="#ffffff"></BsPatchMinus>
          </button>
        )}
      </div>
      {showDescription ? (
        <p
          className={
            "text-xs p-2 text-justify bg-secondary text-white rounded-br-lg rounded-bl-lg"
          }
        >
          {info}
        </p>
      ) : null}
    </div>
  );
};
