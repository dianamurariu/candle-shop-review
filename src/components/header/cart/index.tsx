import React from "react";
import styles from "./cart.module.css";
import { iconDimensions } from "../../../config";
import Counter from "./counter";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

interface CartProps {
  imgSrc: string;
  to: string;
}

const Cart: React.FC<CartProps> = ({ imgSrc, to }) => {
  const { totalCount } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      <a href={to}>
        <img src={imgSrc} width={iconDimensions().medium} height={iconDimensions().medium} alt="icon-cart" />
      </a>
      <div className={styles.counter}>
        {totalCount > 0 && <Counter count={totalCount} />}
      </div>
    </>
  );
};

export default Cart;
