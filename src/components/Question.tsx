import { useState } from "react";
import { BsPlusCircle, BsPatchMinus } from "react-icons/bs";
import { QuestionProps } from "../entities/entities";

export const Question = ({ title, info }: QuestionProps): JSX.Element => {
  const [information, setInformation] = useState<boolean>(false);

  const handleShowInformation: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setInformation((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center w-[85%] flex-col rounded-lg border-2 border-[#F7F7F7] mb-2 md:w-[50%]">
      <div
        className={`flex flex-row items-center justify-between w-full p-2 ${
          information ? "bg-[#F2F2F2]" : "bg-white"
        }`}
      >
        <h2 className="text-sm font-semibold">{title}</h2>
        {!information ? (
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
      {information ? (
        <p className={"text-xs p-2 text-center bg-[#FBFBFB] text-[#BBBBBB]"}>
          {info}
        </p>
      ) : null}
    </div>
  );
};
