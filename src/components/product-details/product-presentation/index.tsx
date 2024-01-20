import React from "react";
import styles from "./product-presentation.module.css";
import { useTranslation } from "react-i18next";

interface PresentationProps {
  imgSrc: string;
}

const ProductPresentation: React.FC<PresentationProps> = ({ imgSrc }) => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_product_presentation}>
       {/* src={`${process.env.PUBLIC_URL}/${imgSrc}`} */}
      <img className={styles.product_image} src={imgSrc} width={540} height={433} alt="candle"/>
      <div className={styles.desc}>
        <p>{t("product-details.product-presentation.desc")}</p>
        <p className={styles.desc2}>
          {t("product-details.product-presentation.desc2")}
        </p>
      </div>
    </div>
  );
};

export default ProductPresentation;
