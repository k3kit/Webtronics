import React, { Children, FC } from "react";
import styles from "./button.module.scss";
interface ButtonProps {
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  width?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  width,
  height,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        height,
        width,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
