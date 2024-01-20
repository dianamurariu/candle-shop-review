import React from "react";
import styles from "./cupon.module.css";
import { useTranslation } from "react-i18next";

interface CuponProps {
  showCupon: boolean;
}

const Cupon: React.FC<CuponProps> = ({ showCupon }) => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_cupon}>
      {showCupon && (
        <>
          <div className={styles.cupon}>
            <input type="text" placeholder={t("checkout.summary-product.cupon.code")}/>
            <button type="button" className={styles.btn_cupon}>
              {t("checkout.summary-product.cupon.btn.cupon")}
            </button>
          </div>
          <div className={styles.divider} />
        </>
      )}
    </div>
  );
};

export default Cupon;
