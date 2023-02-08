import React, { FC, useState } from "react";
interface questionType {
  question: string;
  answer: string;
}
interface AccordionProps {
  faq: questionType;
}
import styles from "./accordion.module.scss";
import { ReactSVG } from "react-svg";
export const Accordion: FC<AccordionProps> = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.item}>
      {isActive ? (
        <ReactSVG
          src={require("./answer.svg").default.src}
          className={styles.icon}
        />
      ) : (
        <ReactSVG
          src={require("./Subtract.svg").default.src}
          className={styles.icon}
        />
      )}
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div className={styles.content}>
          {faq.question}
          {isActive ? (
            <ReactSVG
              src={require("./min.svg").default.src}
              className={styles.icon}
            />
          ) : (
            <ReactSVG
              src={require("./plus.svg").default.src}
              className={styles.icon}
            />
          )}
        </div>
        {isActive && <div className={styles.answer}>{faq.answer}</div>}
      </div>
    </div>
  );
};

{
  /* <ReactSVG
src={require("./QuestionSign.svg").default.src}
className={styles.icon}
/> */
}
