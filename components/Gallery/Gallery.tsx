import React from "react";
import styles from "./gallery.module.scss";
import Image from "next/image";
import dev1 from "../../public/assets/images/dev1.png";
import dev2 from "../../public/assets/images/dev2.png";
import dev3 from "../../public/assets/images/dev3.png";
import dev4 from "../../public/assets/images/dev4.png";
import { LandingSections } from "../footer/Footer";

export const Gallery = () => {
  return (
    <section className={styles.wrapper} id={LandingSections.GALLERY}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.content}>
        <p className={styles.text__top}>
          By the end of this course, you will be able to develop and publish
          your very own Google Chrome extension! In this course we will focus on
          coding exercises and projects..
        </p>
        <Image
          src={dev1}
          alt={"devoloper1"}
          className={`${styles.dev1} ${styles.dev1__image}`}
        />
        <Image src={dev2} alt={"devoloper2"} className={styles.dev2} />
        <Image src={dev3} alt={"devoloper3"} className={styles.dev3} />
        <Image
          src={dev4}
          alt={"devoloper4"}
          className={`${styles.dev4} ${styles.dev4__image}`}
        />
        <p className={styles.text_bottom}>
          If you would like to learn web development and get a job in the tech
          industry, you are going to LOVE this course! Learn HTML, CSS,
          JavaScript, Bootstrap and more with over 15 hours of HD video
          tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web
          page.
        </p>
      </div>
    </section>
  );
};
