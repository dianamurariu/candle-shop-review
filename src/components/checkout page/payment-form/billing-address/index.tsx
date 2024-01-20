import React from "react";
import styles from "./billing-address.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const BillingAddress = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.billing_address}>
      <Title level="h4" className={styles.billing_title}>
        {t("checkout.payment.billing.title")}
      </Title>
      <div className={styles.radio_buttons}>
        <label className={styles.radio_label}>
          <input type="radio" name="shipping" value="same_address" checked />
          <span className={styles.billing_option}>
            {t("checkout.payment.billing.option1")}
          </span>
        </label>
        <div className={styles.divider} />
        <label className={styles.radio_label}>
          <input type="radio" name="shipping" value="different_address" />
          <span className={styles.billing_option}>
            {t("checkout.payment.billing.option2")}g
          </span>
        </label>
      </div>
    </div>
  );
};

export default BillingAddress;
