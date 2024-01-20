import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <a className={styles.link} href={to}>
      <button type="button" className={styles.button}>
        {text}
      </button>
    </a>
  );
};

export default Button;
