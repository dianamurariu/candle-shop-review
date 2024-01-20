import React from "react";
import styles from "./summary-info.module.css";
import { useTranslation } from "react-i18next";

interface InfoProps {
  showContact: boolean;
  showAddress: boolean;
  showShippingMethod: boolean;
}

const SummaryInfo: React.FC<InfoProps> = ({ showContact, showAddress, showShippingMethod }) => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.summary_info}>
      {showContact && (
        <>
          <span className={styles.info}>
            <div className={styles.info_left}>
              <h6 className={styles.info_title}>{t("checkout.summary.contact")}</h6>
            </div>
            <button type="button" className={styles.btn_edit}>Edit</button>
          </span>
          <div className={styles.divider} />
        </>
      )}
      {showAddress && (
        <>
          <span className={styles.info}>
            <div className={styles.info_left}>
              <h6 className={styles.info_title}>{t("checkout.summary.ship")}</h6>
              <p className={styles.info_text}>
                Via Firenze 23, 92023, Campobello di Licata AG, Italia
              </p>
            </div>
            <button type="button" className={styles.btn_edit}>Edit</button>
          </span>
          <div className={styles.divider} />
        </>
      )}
      {showShippingMethod && (
        <>
          <span className={styles.info}>
            <div className={styles.info_left}>
              <h6 className={styles.info_title}>{t("checkout.summary.method")}</h6>
              <p className={styles.info_text}>{t("checkout.summary.option")}</p>
            </div>
            <button type="button" className={styles.btn_edit}>Edit</button>
          </span>
        </>
      )}
    </div>
  );
};

export default SummaryInfo;
