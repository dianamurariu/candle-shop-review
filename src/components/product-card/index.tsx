import React from "react";
import styles from "./product-card.module.css";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<CardProps> = ({ id, imgSrc, name, price }) => {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card_top}>
        <img src={imgSrc} className={styles.card_image} alt="product" />
      </div>
      <div className={styles.card_body}>
        <Link className={styles.card_link} to={`/product/${id}`}>
          <h4 className={styles.card_title}>{name}</h4>
        </Link>
      </div>
      <div className={styles.card_bottom}>
        <span className={styles.card_price}>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
