import React from "react";
import styles from "./cart-layout.module.css";

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {
  return <div className={styles.cart_layout}>{children}</div>;
};

export default CartLayout;
