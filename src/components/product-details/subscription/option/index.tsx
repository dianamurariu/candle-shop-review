import React from "react";
import styles from "./option.module.css";
import { useTranslation } from "react-i18next";

interface OptionProps {
  title: string;
  desc?: string;
  details?: string;
  isDropdown?: boolean;
}

const Option: React.FC<OptionProps> = ({title, desc, details, isDropdown }) => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.wrapper_option}>
      <div className={styles.option_content_top}>
        <input type="radio" name="options" />
        <span className={styles.option_title}>{title}</span>
        {isDropdown && (
          <div className={styles.option_dropdown}>
            <select className={styles.dropdown_option}>
              <option value="4weeks">4 {t("product-details.subscription.weeks")}</option>
              <option value="2weeks">2 {t("product-details.subscription.weeks")}</option>
              <option value="1week">1 {t("product-details.subscription.week")}</option>
            </select>
          </div>
        )}
      </div>
      {desc && details && (
        <div className={styles.option_desc}>
          <span>{desc}</span>
          <p className={styles.details}>{details}</p>
        </div>
      )}
    </div>
  );
};

export default Option;
