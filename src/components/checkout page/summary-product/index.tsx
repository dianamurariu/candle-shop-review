import React from "react";
import styles from "./summary-product.module.css";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import ProductCheckout from "./product-checkout";
import Cupon from "./cupon";
import Price from "./price";

interface SummaryProps {
  shipping_text: string;
  color_total: string;
  total_text: string;
  total_green: boolean;
  showCupon: boolean;
}

const SummaryProduct: React.FC<SummaryProps> = ({ shipping_text, color_total, total_text, total_green, showCupon }) => {
  const products = useAppSelector((state: RootState) => state.cart.items);

  return (
    <div className={styles.summary__product}>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCheckout
            key={product.id}
            product={{
              id: product.id,
              img: product.img,
              name: product.name,
              price: product.price,
            }}
          />
        ))}
      </div>
      <div className={styles.divider} />
      <Cupon showCupon={showCupon} />
      <Price shipping={shipping_text} color_total={color_total} total_text={total_text} total_green={total_green} />

    </div>
  );
};

export default SummaryProduct;
