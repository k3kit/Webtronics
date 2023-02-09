import React from "react";
import styles from "./intro.module.scss";
import Image from "next/image";
import bg from "../../public/assets/images/programmer-working.png";
import { Button } from "../Button/Button";
export const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title__top}>
        <h1 className={styles.title}>Front-end</h1>
        <p className={styles.subtitle}>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).
        </p>
      </div>

      <div className={styles.title__botton}>
        <Button height="72px" width="288px">
          Start my career change
        </Button>
        <h1 className={styles.title}>Developer</h1>
      </div>

      <h3 className={styles.subtitle__bottom}>Courses</h3>

      <div className={styles.background__container}>
        <Image src={bg} className={styles.background} alt={""} />
      </div>
    </section>
  );
};
