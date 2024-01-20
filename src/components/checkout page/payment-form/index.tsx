import React from "react";
import Stepper from "../stepper";
import SummaryInfo from "../summary-info";
import PaymentMethod from "./payment-method";
import TaxInfo from "./tax-info";
import BillingAddress from "./billing-address";
import CheckoutButtons from "../checkout-buttons";
import { useTranslation } from "react-i18next";

const PaymentForm = () => {
  const [t] = useTranslation("global");

  return (
    <div className="payment__form">
      <Stepper active="Payment" passed={["Cart", "Details", "Shipping"]} />
      <SummaryInfo showContact={true} showAddress={true} showShippingMethod={true}/>
      <PaymentMethod />
      <TaxInfo />
      <BillingAddress />
      <CheckoutButtons
        btnBack_text={t("checkout.payment.btn.shipping")}
        btnBack_to="/checkout/shipping"
        btnNext_text={t("btn.payNow")}
        btnNext_to="/checkout/confirmation"
      />
    </div>
  );
};

export default PaymentForm;
