import React from "react";
import styles from "./contact-section.module.css";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.contact__section}>
      <div className={styles.contact__section_header}>
        <Title level="h4" className={styles.contact_title}>
          {t("checkout.authentication.contact.title")}
        </Title>
        <span className={styles.contact_login}>
          <p>{t("checkout.authentication.contact.account")}</p>
          <a href="/login" className={styles.login_link}>
            Login
          </a>
        </span>
      </div>
      <div className={styles.contact__section_body}>
        <input type="text" className={styles.input_email} placeholder={t("checkout.authentication.contact.email")} />
        <div className={styles.contact_checkbox}>
          <input type="checkbox" id="discont" />
          <label htmlFor="discount">
            {t("checkout.authentication.contact.discount")}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
