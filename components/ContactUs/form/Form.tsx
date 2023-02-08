import React from "react";
import { Button } from "../../Button/Button";
import styles from "./form.module.scss";
export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.border__input}>
        <input type="text" placeholder="Name" className={styles.input} />
      </div>
      <div className={styles.border__input}>
        <input type="text" placeholder="Phone" className={styles.input} />
      </div>
      <div className={styles.border__input}>
        <input type="text" placeholder="E-mail" className={styles.input} />
      </div>

      <Button width="497px" height="72px">
        Send
      </Button>
    </form>
  );
};
// children?: React.ReactNode;
// height?: string;
// onClick?: () => void;
// width?: string;
