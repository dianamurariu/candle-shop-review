import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./product-info.module.css";
import Title from "../../title";
import Quantity from "../quantity";
import Subscription from "../subscription";
import ButtonAdd from "../../button-add";
import Details from "../details";
import { useTranslation } from "react-i18next";

interface InfoProps {
  product: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
}

const ProductInfo: React.FC<InfoProps> = ({ product }) => {
  const [t] = useTranslation("global");

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.wrapper_product_info}>
      <Title level="h3" className={styles.title}>
        {product.name} Candleaf®
      </Title>
      <div className={styles.container_inner}>
        <div className={styles.container_left}>
          <span className={styles.price}>${product.price}</span>
          <div className={styles.wrapper_quantity}>
            <h6 className={styles.quantity_title}>
              {t("product-details.product-info.quantity")}
            </h6>
            <Quantity
              itemId={product.id}
              quantity={quantity}
              onQuantityChange={setQuantity}
              inCart={false}
            />
          </div>
        </div>
        <div className={styles.container_right}>
          <Subscription />
          <ButtonAdd product={product} quantity={quantity} />
        </div>
      </div>
      <Details />
    </div>
  );
};

export default ProductInfo;
