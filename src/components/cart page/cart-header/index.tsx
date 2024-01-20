import React from "react";
import styles from "./cart-header.module.css";
import Title from "../../title";
import ButtonBack from "../../button-back";
import { useTranslation } from "react-i18next";

const CartHeader: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_header}>
      <div className="container">
        <Title level="h3" className={styles.title}>
          {t("cart.header.title")}
        </Title>
        <div className={styles.wrapper_button}>
          <ButtonBack text={t("cart.header.btn.shopping")} to="/#product-listing" />
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
