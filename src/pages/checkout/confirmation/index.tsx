import React from "react";
import styles from "./confirmation.module.css";
import Layout from "../../../components/layout";
import ConfirmationPayment from "../../../components/checkout page/confirmation-payment";
import SummaryProduct from "../../../components/checkout page/summary-product";
import { useTranslation } from "react-i18next";

const Confirmation = () => {
  const [t] = useTranslation("global");

  return (
    <Layout>
      <div className="container">
        <div className={styles.container_inner}>
          <div className="left_side">
            <ConfirmationPayment />
          </div>
          <div className="right_side">
            <SummaryProduct
              shipping_text={t("checkout.summary-product.price.freeShipping")}
              color_total={styles.total_green}
              total_text={t("checkout.summary-product.price.paid")}
              total_green={true}
              showCupon={false}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
