import React, { useState } from "react";
import styles from "./button-add.module.css";
import { iconDimensions } from "../../config";
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../../app/cartSlice";
import { useTranslation } from "react-i18next";

interface ButtonAddProps {
  product: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
  quantity: number;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ product, quantity }) => {
  const [t] = useTranslation("global");

  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    quantity: quantity || 1,
  };

  const handleAddToCart = () => {
    dispatch(addItem(cartItem));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`${styles.button_add} ${isHovered ? styles.hovered : ""}`}
      onClick={handleAddToCart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? "/images/Cart-white.svg" : "/images/Cart-green.svg"}
        alt="cart-logo"
        width={iconDimensions().medium}
        height={iconDimensions().medium}
      />
      <span className={styles.button_text}>{t("btn.add")}</span>
    </button>
  );
};

export default ButtonAdd;
