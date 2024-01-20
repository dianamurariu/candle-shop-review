import React from "react";
import styles from "./product-checkout.module.css";
import Title from "../../../title";
import Counter from "../../../header/cart/counter";
import { useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../app/store";
import { calculateCartItemTotal } from "../../../../cartUtils";

interface ProductProps {
  product: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
}

const ProductCheckout: React.FC<ProductProps> = ({ product }) => {
  const quantity = useAppSelector(
    (state: RootState) =>
      state.cart.items.find((item) => item.id === product.id)?.quantity ?? 0
  );

  const priceTotal = calculateCartItemTotal({
    price: product.price,
    quantity: quantity,
  });

  return (
    <div className={styles.product__checkout}>
      <div className={styles.product__left_side}>
        <div className={styles.product_image}>
        {/* src={`${process.env.PUBLIC_URL}/${product.img}`} */}
          <img src={product.img} alt="candle" width={160} height={120}/>
          <div className={styles.product_counter}>
            <Counter count={quantity} />
          </div>
        </div>
      </div>
      <div className={styles.product__right_side}>
        <Title level="h6" className={styles.product_name}>
          {product.name} Candleaf®
        </Title>
        <span className={styles.product_price}>$ {priceTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCheckout;
