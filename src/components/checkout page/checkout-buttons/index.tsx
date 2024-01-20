import React from "react";
import styles from "./checkout-buttons.module.css";
import ButtonBack from "../../button-back";
import Button from "../../button";

interface ButtonsProps {
  btnBack_text: string;
  btnBack_to: string;
  btnNext_text: string;
  btnNext_to: string;
}

const CheckoutButtons: React.FC<ButtonsProps> = ({ btnBack_text, btnBack_to, btnNext_text, btnNext_to }) => {
  return (
    <div className={styles.checkout__buttons}>
      <ButtonBack text={btnBack_text} to={btnBack_to} />
      <Button text={btnNext_text} to={btnNext_to} />
    </div>
  );
};

export default CheckoutButtons;
