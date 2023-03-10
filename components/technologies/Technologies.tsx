import React from "react";
import styles from "./tech.module.scss";
import { Card } from "./card/Card";
import { LandingSections } from "../footer/Footer";

export const Technologies = () => {
  return (
    <section className={styles.tech} id={LandingSections.PROGRAMMINGTECH}>
      <div className={styles.wrapper}>
        <div className={styles.title__info}>
          <h2 className={styles.title}>Programming technologies</h2>
          <p className={styles.subtitle}>
            By the end, you’ll have the portfolio and interview skills you need
            to start your new career.
          </p>
        </div>
      </div>
      <div className={styles.technology__list}>
        <div className={styles.item}>
          <Card
            src={require("../../public/assets/icons/angular.svg").default.src}
            title="Angular"
          />
        </div>
        <div className={styles.item}>
          <Card
            src={require("../../public/assets/icons/react.svg").default.src}
            title="React"
          />
        </div>
        <div className={styles.item}>
          <Card
            src={require("../../public/assets/icons/vue.svg").default.src}
            title="Vue.js "
          />
        </div>
        <div className={styles.item}>
          <Card
            src={
              require("../../public/assets/icons/javascript.svg").default.src
            }
            title="JavaScript"
          />
        </div>
      </div>
    </section>
  );
};
