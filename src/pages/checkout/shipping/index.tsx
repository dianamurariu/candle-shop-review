import React from "react";
import Layout from "../../../components/layout";
import styles from "./shipping.module.css";
import ShippingForm from "../../../components/checkout page/shipping-form";
import SummaryProduct from "../../../components/checkout page/summary-product";
import { useTranslation } from "react-i18next";

const Shipping = () => {
  const [t] = useTranslation("global");

  return (
    <Layout>
      <div className="container">
        <div className={styles.container_inner}>
          <div className="left_side">
            <ShippingForm />
          </div>
          <div className="right_side">
            <SummaryProduct
              shipping_text={t("checkout.summary-product.price.freeShipping")}
              color_total={styles.total_black}
              total_text="Total"
              total_green={false}
              showCupon={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
