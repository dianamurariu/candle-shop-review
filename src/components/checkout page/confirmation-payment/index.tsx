import React from "react";
import styles from "./confirmation-payment.module.css";
import Stepper from "../stepper";
import ConfirmationOrder from "./confirmation-order";
import Button from "../../button";
import { useTranslation } from "react-i18next";

const ConfirmationPayment = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.confirmation__payment}>
      <Stepper active="Payment" passed={["Cart", "Details", "Shipping"]} />
      <ConfirmationOrder />
      <div className={styles.confirmation_btns}>
        <Button text={t("btn.shopping")} to="/home" />
        <button type="button" className={styles.btn_print}>
          {t("btn.print")}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPayment;
