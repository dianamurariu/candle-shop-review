import React from "react";
import styles from "./authentication.module.css";
import Layout from "../../../components/layout";
import AuthenticationForm from "../../../components/checkout page/authentication-form";
import SummaryProduct from "../../../components/checkout page/summary-product";
import { useTranslation } from "react-i18next";

const Authentication = () => {
  const [t] = useTranslation("global");

  return (
    <Layout>
      <div className="container">
        <div className={styles.container_inner}>
          <div className="left_side">
            <AuthenticationForm />
          </div>
          <div className="right_side">
            <SummaryProduct
              shipping_text={t("checkout.summary-product.price.calcNextStep")}
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

export default Authentication;
