import React from "react";
import styles from "./button-delete.module.css";
import { useAppDispatch } from "../../app/hooks";
import { removeItem } from "../../app/cartSlice";
import { useTranslation } from "react-i18next";

interface ButtonDeleteProps {
  productId: number;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ productId }) => {
  const [t] = useTranslation("global");

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItem(productId));
  };

  return (
    <button type="button" className={styles.button_delete} onClick={handleRemoveFromCart}>
      {t("btn.delete")}
    </button>
  );
};

export default ButtonDelete;
