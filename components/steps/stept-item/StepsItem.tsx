import React, { FC } from "react";
import styles from "./steps__item.module.scss";
import { ReactSVG } from "react-svg";
import classNames from "classnames";
interface StepsItemProps {
  headerTitle: string;
  title: string;
  content: string;
  reverse?: boolean;
}
export const StepsItem: FC<StepsItemProps> = ({
  headerTitle,
  title,
  content,
  reverse,
}) => {
  return (
    <div className={styles.container}>
      <ReactSVG
        src={require("./InfoCardStroke.svg").default.src}
        className={classNames(styles.stroke, { [styles.reverse]: reverse })}
      />
      {reverse && (
        <ReactSVG
          src={require("../arrow.svg").default.src}
          className={styles.left__arrow}
        />
      )}
      {!reverse && (
        <ReactSVG
          src={require("../r-arrow.svg").default.src}
          className={styles.right__arrow}
        />
      )}
      <div className={styles.border}>
        <div className={styles.card}>
          <h4 className={styles.title}>{headerTitle}</h4>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
    </div>
  );
};
