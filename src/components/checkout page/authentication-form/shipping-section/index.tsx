import React from "react";
import styles from "./shipping-section.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const ShippingSection = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.shipping_section}>
      <div className={styles.shipping__section_top}>
        <Title level="h4" className={styles.shipping_title}>
          {t("checkout.authentication.shipping.title")}
        </Title>
      </div>

      <div className={styles.shipping__section_body}>
        <div className={styles.shipping_name}>
          <input type="text" placeholder={t("checkout.authentication.shipping.name")}/>
          <input type="text" placeholder={t("checkout.authentication.shipping.secondName")}/>
        </div>
        <input type="text" placeholder={t("checkout.authentication.shipping.address")}/>
        <input type="text" placeholder={t("checkout.authentication.shipping.note")}/>
        <div className={styles.shipping_city}>
          <input type="text" placeholder={t("checkout.authentication.shipping.city")}/>
          <input type="text" placeholder={t("checkout.authentication.shipping.postalCode")}/>
          <select name="province" id="province" defaultValue="">
            <option value="" disabled selected>
              {t("checkout.authentication.shipping.province")}
            </option>
            <option value="1">Neamt</option>
            <option value="2">Iasi</option>
            <option value="3">Suceava</option>
            <option value="4">Botosani</option>
          </select>
        </div>
        <select name="country" id="country" defaultValue="">
          <option value="" disabled selected>
            {t("checkout.authentication.shipping.country")}
          </option>
          <option value="1">Romania</option>
          <option value="2">Italy</option>
          <option value="3">Spain</option>
          <option value="4">Portugal</option>
        </select>
        <div className={styles.shipping_checkbox}>
          <input type="checkbox" id="info" />
          <label htmlFor="info">
            {t("checkout.authentication.shipping.checkbox")}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
