import React from "react";
import styles from "./cart-wrapper.module.css";
import TableHeading from "../table-heading";
import CartItem from "../cart-item";
import CartSubtotal from "../cart-subtotal";
import Button from "../../button";
import { calculateCartSubtotal } from "../../../cartUtils";
import { useTranslation } from "react-i18next";

import { RootState } from "../../../app/store";
import { useAppSelector } from "../../../app/hooks";

const CartWrapper = () => {
  const [t] = useTranslation("global");

  // Get the cart items from the Redux store
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  // Calculate the subtotal
  const subtotal = calculateCartSubtotal(cartItems);

  return (
    <div className={styles.cart_wrapper}>
      <div className="container">
        <div className="cart_top">
          <TableHeading
            col1={t("cart.cart-wrapper.col.product")}
            col2={t("cart.cart-wrapper.col.price")}
            col3={t("cart.cart-wrapper.col.quantity")}
            col4={t("cart.cart-wrapper.col.total")}
          />
        </div>
        <div className="cart_body">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              product={{
                id: cartItem.id,
                img: cartItem.img,
                name: cartItem.name,
                price: cartItem.price,
              }}
            />
          ))}
        </div>
        <div className={styles.cart_bottom}>
          <CartSubtotal
            title="Sub-total"
            price={parseFloat(subtotal.toFixed(2))}
            VAT={t("cart.cart-wrapper.VAT")}
          />
          <Button text={t("btn.checkout")} to="/checkout" />
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
