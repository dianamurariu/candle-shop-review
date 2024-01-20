import React from "react";
import styles from "./button-back.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ButtonBackProps {
  text: string;
  to: string;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ text, to }) => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_button}>
      <Link to={to}>
        <button type="button" className={styles.button_back}>
          {t("btn.back")} {text}
        </button>
      </Link>
    </div>
  );
};

export default ButtonBack;
