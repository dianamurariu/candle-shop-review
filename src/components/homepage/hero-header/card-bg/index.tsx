import React from "react";
import styles from "./card-bg.module.css";
import Title from "../../../title";
import Button from "../../../button";
import { useTranslation } from "react-i18next";

const CardBg: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.card_bg}>
      <div className={styles.title_icon}>🌱</div>
      <Title level="h1" className={styles.title}>
        {t("home.hero.title")}
      </Title>
      <p className={styles.desc}>{t("home.hero.desc")}</p>
      <div className={styles.wrapper_button}>
        <Button text={t("home.hero.btn.collection")} to="/#product-listing" />
      </div>
    </div>
  );
};

export default CardBg;
