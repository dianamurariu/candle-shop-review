import React from "react";
import styles from "./confirmation-order.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const ConfirmationOrder = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.confirmation__order}>
      <img src="/images/CheckCircle.svg" width={100} height={100} alt="confirmation"/>
      <Title level="h3" className={styles.confirmation__order_title}>
        {t("checkout.confirmation.title")}
      </Title>
      <span className={styles.order_no}>ORDER #2039</span>
      <p className={styles.thanks}> {t("checkout.confirmation.thanks")}</p>
    </div>
  );
};

export default ConfirmationOrder;
