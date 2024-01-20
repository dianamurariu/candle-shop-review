import React from "react";
import styles from "./popular.module.css";
import Title from "../../title";
import cards from "../product-listing/product.json";
import ProductCard from "../../product-card";
import { useTranslation } from "react-i18next";

const Popular: React.FC = () => {
  const [t] = useTranslation("global");

  const topCards = cards.slice(0, 4);
  return (
    <div className={styles.popular}>
      <div className="container">
        <div className={styles.container_inner}>
          <Title level="h2" className={styles.title}>
            {t("home.popular.title")}
          </Title>
          <Title level="h5" className={styles.subtitle}>
            {t("home.popular.subtitle")}
          </Title>
          <div className={styles.wrapper_cards}>
            {topCards.map(({ id, name, price, img }) => (
              <div key={id}>
                <ProductCard id={id} imgSrc={img} name={name} price={price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
