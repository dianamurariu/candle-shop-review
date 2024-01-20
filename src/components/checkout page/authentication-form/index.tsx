import React from "react";
import styles from "./authentication-form.module.css";
import Stepper from "../stepper";
import ContactSection from "./contact-section";
import ShippingSection from "./shipping-section";
import CheckoutButtons from "../checkout-buttons";
import { useTranslation } from "react-i18next";

const AuthenticationForm = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.authentication__form}>
      <Stepper active="Details" passed="Cart" />
      <ContactSection />
      <ShippingSection />
      <CheckoutButtons
        btnBack_text={t("checkout.authentication.btn.cart")}
        btnBack_to="/cart"
        btnNext_text={t("btn.shipping")}
        btnNext_to="/checkout/shipping"
      />
    </div>
  );
};

export default AuthenticationForm;
