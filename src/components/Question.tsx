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
      className="flex items-center justify-center w-[85%] flex-col rounded-lg border-2 border-[#F7F7F7] mb-2 md:w-[50%]"
      data-testid="question"
    >
      <div
        className={`flex flex-row items-center justify-between w-full p-2 ${
          showDescription ? "bg-[#F2F2F2]" : "bg-white"
        }`}
      >
        <h2 className="text-sm font-semibold">{title}</h2>
        {!showDescription ? (
          <button
            type="button"
            aria-label="open question"
            onClick={handleShowInformation}
          >
            <BsPlusCircle fontWeight={600}></BsPlusCircle>
          </button>
        ) : (
          <button
            type="button"
            aria-label="close question"
            onClick={handleShowInformation}
          >
            <BsPatchMinus fontWeight={600}></BsPatchMinus>
          </button>
        )}
      </div>
      {showDescription ? (
        <p className={"text-xs p-2 text-center bg-[#FBFBFB] text-[#BBBBBB]"}>
          {info}
        </p>
      ) : null}
    </div>
  );
};
