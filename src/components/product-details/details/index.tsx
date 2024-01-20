import React from "react";
import styles from "./details.module.css";
import { useTranslation } from "react-i18next";

const Details: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_details}>
      <p className={styles.text}>
        <strong className={styles.bold}>
          {t("product-details.details.wax.title")}
        </strong>{" "}
        {t("product-details.details.wax.desc")}
      </p>
      <p className={styles.text}>
        <strong className={styles.bold}>
          {t("product-details.details.fragrance.title")}
        </strong>{" "}
        {t("product-details.details.fragrance.desc")}
      </p>
      <div className={styles.wrapper_text}>
        <span className={styles.text}>
          <strong className={styles.bold}>
            {t("product-details.details.burning.title")}
          </strong>{" "}
          {t("product-details.details.burning.desc")}
        </span>
        <span className={styles.text}>
          <strong className={styles.bold}>
            {t("product-details.details.dimensions.title")}
          </strong>{" "}
          {t("product-details.details.dimensions.desc")}
        </span>
        <span className={styles.text}>
          <strong className={styles.bold}>
            {t("product-details.details.weight.title")}
          </strong>{" "}
          {t("product-details.details.weight.desc")}
        </span>
      </div>
    </div>
  );
};

export default Details;
