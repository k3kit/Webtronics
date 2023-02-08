import React, { FC } from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import { ReactSVG } from "react-svg";
interface CardProps {
  src: string;
  title: string;
}
export const Card: FC<CardProps> = ({ src, title }) => {
  return (
    <div className={styles.card}>
      <Image src={require("./IconCardBorder.svg").default} alt={""} />
      <div className={styles.icon__wrapper}>
        {" "}
        <ReactSVG src={src} className={styles.icon} />
        <h4 className={styles.icon__title}>{title}</h4>
      </div>
    </div>
  );
};
// "../../../public/assets/icons/angular.svg"
