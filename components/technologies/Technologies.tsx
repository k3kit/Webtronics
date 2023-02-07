import React from "react";
import styles from "./tech.module.scss";

export const Technologies = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.wrapper}>
        <div className={styles.title__info}>
          <h2 className={styles.title}>Programming technologies</h2>
          <p className={styles.subtitle}>
            By the end, you’ll have the portfolio and interview skills you need
            to start your new career.
          </p>
        </div>
      </div>
    </div>
  );
};
