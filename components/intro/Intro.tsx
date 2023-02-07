import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import bg from "../../public/assets/images/programmer-working.png";
export const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.background__container}>
        <Image src={bg} className={styles.background} alt={""} />
      </div>
    </div>
  );
};
