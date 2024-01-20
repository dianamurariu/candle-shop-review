import React from "react";
import styles from "./payment-method.module.css";
import { iconDimensions } from "../../../../config";
import Title from "../../../title";
import { useTranslation } from "react-i18next";

const PaymentMethod = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.payment__method}>
      <Title level="h4" className={styles.payment__method_title}>
        {t("checkout.payment.method.title")}
      </Title>
      <div className={styles.credit_card}>
        <div className={styles.wrapper_credit_card_title}>
          <img
            src="/images/CreditCardFill.svg"
            alt="credit card"
            width={iconDimensions().large}
            height={iconDimensions().large}
          />
          <h6 className={styles.credit_card_title}>Credit Card</h6>
        </div>
        <div className={styles.credit_card_info}>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Holder Name" />
          <div className={styles.credit_card_expiration}>
            <input type="date" placeholder="Expiration (MM/YY)" />
            <input type="number" placeholder="CVV" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
