import React from "react";
import styles from "./price.module.css";
import { useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../app/store";
import { calculateCartSubtotal } from "../../../../cartUtils";
import { useTranslation } from "react-i18next";

interface PriceProps {
  shipping: string;
  color_total: string;
  total_text: string;
  total_green?: boolean;
}

const Price: React.FC<PriceProps> = ({ shipping, color_total, total_text, total_green }) => {
  const [t] = useTranslation("global");

  const products = useAppSelector((state: RootState) => state.cart.items);

  const subtotal = calculateCartSubtotal(products);

  return (
    <div className={styles.wrapper_price}>
      <div className={styles.subtotal}>
        <h6 className={styles.title}>Subtotal</h6>
        <span className={styles.subtotal_price}>
          $ {parseFloat(subtotal.toFixed(2))}
        </span>
      </div>
      <div className={styles.shipping_price}>
        <h6 className={styles.title}>
          {t("checkout.summary-product.price.shipping")}
        </h6>
        <p className={styles.shipping}>{shipping}</p>
      </div>
      <div className={styles.divider} />
      <div className={styles.total}>
        {total_green ? (
          <h6 className={`${styles.title} ${styles.total_green}`}>
            {total_text}
          </h6>
        ) : (
          <h6 className={styles.title}>{total_text}</h6>
        )}
        <span className={`${styles.total_price} ${color_total}`}>
          $ {parseFloat(subtotal.toFixed(2))}
        </span>
      </div>
    </div>
  );
};

export default Price;
