import React from "react";
import Stepper from "../stepper";
import SummaryInfo from "../summary-info";
import ShippingMethod from "./shipping-method";
import CheckoutButtons from "../checkout-buttons";
import { useTranslation } from "react-i18next";

const ShippingForm = () => {
  const [t] = useTranslation("global");

  return (
    <div className="shipping__form">
      <Stepper active="Shipping" passed={["Cart", "Details"]} />
      <SummaryInfo showContact={true} showAddress={true} showShippingMethod={false}/>
      <ShippingMethod />
      <CheckoutButtons
        btnBack_text={t("checkout.shipping.btn.details")}
        btnBack_to="/checkout/details"
        btnNext_text={t("btn.payment")}
        btnNext_to="/checkout/payment"
      />
    </div>
  );
};

export default ShippingForm;
