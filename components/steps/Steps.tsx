import React from "react";
import styles from "./steps.module.scss";
import { StepsItem } from "./stept-item/StepsItem";
import { ReactSVG } from "react-svg";
import { LandingSections } from "../footer/Footer";
const StepsList = [
  ["Step 1", "Step 2"],
  ["Step 3", "Step 4"],
  ["Step 5", "Step 6"],
];
export const Steps = () => {
  return (
    <section className={styles.wrapper} id={LandingSections.STEPS}>
      <h2 className={styles.title}>Steps</h2>
      <div className={styles.cards}>
        <div className={styles.left__item}>
          <div className={styles.item__wrapper}>
            <StepsItem
              headerTitle={"Step 1"}
              title={"Introduction to Front-End "}
              content={
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
              }
              reverse
            />
          </div>

          <StepsItem
            headerTitle={"Step 3"}
            title={"Introduction to Front-End "}
            content={
              "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            }
            reverse
          />
          <StepsItem
            headerTitle={"Step 5"}
            title={"Introduction to Front-End "}
            content={
              "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            }
            reverse
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.right__item}>
          <StepsItem
            headerTitle={"Step 2"}
            title={"Introduction to Front-End "}
            content={
              "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            }
          />
          <StepsItem
            headerTitle={"Step 4"}
            title={"Introduction to Front-End "}
            content={
              "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            }
          />
          <StepsItem
            headerTitle={"Step 6"}
            title={"Introduction to Front-End "}
            content={
              "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            }
          />
        </div>
      </div>
    </section>
  );
};
