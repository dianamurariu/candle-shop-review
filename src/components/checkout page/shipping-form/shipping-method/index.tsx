import React from "react";
import styles from "./shipping-method.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const ShippingMethod = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.shipping__method}>
      <Title level="h4" className={styles.shipping__method_title}>
        {t("checkout.shipping.method.title")}
      </Title>
      <div className={styles.radio_button}>
        <label className={styles.radio_label}>
          <div className="left_side">
            <input type="radio" name="shipping" value="standard" />
            <span className={styles.shipping_option}>
              {t("checkout.shipping.method.option")}
            </span>
          </div>
          <span className={styles.shipping_price}>
            {t("checkout.shipping.method.free")}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ShippingMethod;
