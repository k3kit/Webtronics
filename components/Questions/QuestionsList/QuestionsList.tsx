import React from "react";
import { Accordion } from "../../Accordion/Accordion";

export const faqs = new Array(5).fill({
  question: "What is the price?",
  answer:
    "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
});
export const QuestionsList = () => {
  return (
    <>
      {faqs.map((it, i) => (
        <Accordion key={i} faq={it} />
      ))}
    </>
  );
};
