import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { updateQuantity } from "../../../app/cartSlice";
import styles from "./quantity.module.css";

interface QuantityProps {
  itemId: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  inCart: boolean;
}

const Quantity: React.FC<QuantityProps> = ({ itemId, quantity, onQuantityChange, inCart }) => {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
    if (inCart) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
      if (inCart) {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
      }
    }
  };

  return (
    <div className={styles.wrapper_buttons}>
      <button className={styles.btn_quanity} onClick={handleDecrement}>{" "}-{" "}</button>
      <span className={styles.count_quantity}>{quantity}</span>
      <button className={styles.btn_quanity} onClick={handleIncrement}>{" "}+{" "}</button>
    </div>
  );
};

export default Quantity;
