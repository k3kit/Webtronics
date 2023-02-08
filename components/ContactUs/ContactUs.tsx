import React from "react";
import styles from "./contact.module.scss";
import { Form } from "./form/Form";

export const ContactUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.container}>
          <h2 className={styles.title}>Contact us</h2>
          <p className={styles.description}>
            Do you have any kind of help please contact with us.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};
