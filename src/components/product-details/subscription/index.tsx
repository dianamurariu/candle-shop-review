import React from "react";
import styles from "./subscription.module.css";
import Option from "./option";
import { useTranslation } from "react-i18next";

const Subscription: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_subscription}>
      <Option title={t("product-details.subscription.option1")} />
      <Option
        title={t("product-details.subscription.option2")}
        desc={t("product-details.subscription.option2-desc")}
        details={t("product-details.subscription.details")}
        isDropdown={true}
      />
    </div>
  );
};

export default Subscription;
