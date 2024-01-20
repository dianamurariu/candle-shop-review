import React from "react";
import styles from "./product-listing.module.css";
import Title from "../../title";
import ProductCard from "../../product-card";
import products from "./product.json";
import { useTranslation } from "react-i18next";

const ProductListing: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.product_listing} id="product-listing">
      <div className="container">
        <div className={styles.list_container}>
          <Title level="h2" className={styles.title}>
            {t("home.product-listing.title")}
          </Title>
          <Title level="h5" className={styles.subtitle}>
            {t("home.product-listing.subtitle")}
          </Title>
          <div className={styles.wrapper_cards}>
            {products.map(({ id, name, price, img }) => (
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

export default ProductListing;
