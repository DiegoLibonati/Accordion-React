import React, { useState } from "react";
import { BsPlusCircle, BsPatchMinus } from "react-icons/bs";

export const Question = ({ title, info }) => {
  const [information, setInformation] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShowInformation = (e) => {
    if (!information) {
      setInformation(true);
      setIsActive(true);
    } else {
      setInformation(false);
      setIsActive(false);
    }
  };

  return (
    <>
      <div className="faq_container">
        <div className="faq_container_header">
          <h2>{title}</h2>
          {!information ? (
            <BsPlusCircle
              className="btn"
              onClick={handleShowInformation}
            ></BsPlusCircle>
          ) : (
            <BsPatchMinus
              className="btn"
              onClick={handleShowInformation}
            ></BsPatchMinus>
          )}
        </div>
        {information ? (
          <p className={isActive ? "faq_container_info height_transition" : ""}>
            {info}
          </p>
        ) : (
          <p className={isActive ? "" : "faq_container_info"}></p>
        )}
      </div>
    </>
  );
};
