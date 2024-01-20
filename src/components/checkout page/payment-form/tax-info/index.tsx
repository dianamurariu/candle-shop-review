import React from "react";
import styles from "./tax-info.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const TaxInfo = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.tax__info}>
      <Title level="h4" className={styles.tax__info_title}>
        {t("checkout.payment.tax.title")}
      </Title>
      <div className={styles.wrapper_tax_info}>
        <input type="text" placeholder="VAT number  (optional)" />
        <input type="text" placeholder="PEC (optional)" />
      </div>
    </div>
  );
};

export default TaxInfo;
