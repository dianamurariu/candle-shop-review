import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./cart-item.module.css";
import CartLayout from "../../layout/cart-layout";
import ButtonDelete from "../../button-delete";
import Quantity from "../../product-details/quantity";
import { useAppSelector,useAppDispatch } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { updateQuantity } from "../../../app/cartSlice";
import { calculateCartItemTotal } from "../../../cartUtils";

interface CartProps {
  product: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
}

const CartItem: React.FC<CartProps> = ({ product }) => {
  const cartQuantity = useAppSelector(
    (state: RootState) =>
      state.cart.items.find((item) => item.id === product.id)?.quantity ?? 0
  );

  const dispatch = useAppDispatch();

  const cartTotal = calculateCartItemTotal({
    price: product.price,
    quantity: cartQuantity,
  });

  return (
    <>
      <div className={styles.wrapper_cart_item}>
        <CartLayout>
          <div className={`${styles.cart_product} ${styles.right_aligned}`}>
            <Link
              to={`/product/${product.id}`}
              className={styles.wrapper_image}
            >
              <img src={product.img} alt="candle" width={160} height={120} />
            </Link>
            <div className={styles.cart_info}>
              <Link to={`/product/${product.id}`} className={styles.item_title}>
                {product.name} Candleaf®
              </Link>
              <ButtonDelete productId={product.id} />
            </div>
          </div>
          <div className={`${styles.cart_price} ${styles.right_aligned}`}>
            $ {product.price}
          </div>
          <div className={styles.cart_quantity}>
            <Quantity
              itemId={product.id}
              quantity={cartQuantity}
              inCart={true}
              onQuantityChange={(newQuantity) =>
                dispatch(
                  updateQuantity({ id: product.id, quantity: newQuantity })
                )
              }
            />
          </div>
          <div className={`${styles.cart_total} ${styles.right_aligned}`}>
            $ {cartTotal.toFixed(2)}
          </div>
        </CartLayout>
      </div>
      <div className={styles.divider} />
    </>
  );
};

export default CartItem;
