import React from "react";
import styles from "./cart-subtotal.module.css";
import Title from "../../title";

interface SubtotalProps {
  title: string;
  price: number;
  VAT: string;
}

const CartSubtotal: React.FC<SubtotalProps> = ({ title, price, VAT }) => {
  return (
    <div className={styles.wrapper_subtotal}>
      <div className={styles.subtotal_top}>
        <Title level="h4" className={styles.subtotal_title}>
          {title}
        </Title>
        <p className={styles.subtotal_price}>$ {price}</p>
      </div>
      <p className={styles.subtotal_VAT}>{VAT}</p>
    </div>
  );
};

export default CartSubtotal;
