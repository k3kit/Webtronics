import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { LandingSections } from "../footer/Footer";

export const AboutUs = () => {
  const line = require("./line.svg").default.src;
  return (
    <section className={styles.about} id={LandingSections.ABOUT}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.container}>
        <div className={styles.mentors__container}>
          <h3 className={styles.mentors__title}>Mentors</h3>
          <ReactSVG src={line} />
          <div className={styles.mentors}>
            <div className={styles.item}>
              <div className={styles.border}>
                <Image
                  src={
                    require("../../public/assets/images/Wade Warren.png")
                      .default
                  }
                  width={184}
                  height={184}
                  alt={"Wade Warren"}
                  className={styles.photo}
                ></Image>
              </div>
              <h4 className={styles.name}>Wade Warren</h4>
              <p className={styles.text}>
                Front-end engineers work closely with designers
              </p>
            </div>
            <div className={`${styles.item} ${styles.second__item}`}>
              <div className={styles.border}>
                <Image
                  src={
                    require("../../public/assets/images/Kristin Watson.png")
                      .default
                  }
                  width={184}
                  height={184}
                  alt={"Wade Warren"}
                  className={styles.photo}
                ></Image>
              </div>
              <h4 className={styles.name}>Kristin Watson</h4>
              <p className={styles.text}>
                Front-end engineers work closely with designers
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.border}>
                {" "}
                <Image
                  src={
                    require("../../public/assets/images/RobertFox.png").default
                  }
                  width={184}
                  height={184}
                  alt={"Robert Fox"}
                  className={styles.photo}
                ></Image>
              </div>
              <h4 className={styles.name}>Robert Fox</h4>
              <p className={styles.text}>
                Front-end engineers work closely with designers
              </p>
            </div>
          </div>
        </div>
        <div className={styles.text__info}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </div>
      </div>
    </section>
  );
};
