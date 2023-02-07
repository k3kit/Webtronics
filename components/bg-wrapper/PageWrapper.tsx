import React from "react";
import Image from "next/image";
import bg from "../../public/assets/images/backgroundParticles.png";
import styles from "./PageWrapper.module.scss";
export const PageWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={bg} alt={""} />
      </div>
    </div>
  );
};
