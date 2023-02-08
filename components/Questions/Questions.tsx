import React from "react";
import styles from "./questions.module.scss";
import { ReactSVG } from "react-svg";
import { QuestionsList } from "./QuestionsList/QuestionsList";

export const Questions = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.container}>
        <div className={styles.left__block}>
          <pre className={styles.description}>
            {`Do you have any kind of questions?\nWe are here to help.`}
          </pre>
          <ReactSVG
            src={require("./QuestionSign.svg").default.src}
            className={styles.icon}
          />
        </div>
        <div className={styles.right__block}>
          <QuestionsList />
        </div>
      </div>
    </section>
  );
};
