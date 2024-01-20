import React from "react";
import styles from "./mainfooter.module.css";
import Logo from "../../logo";
import NavList from "../../nav-list";
import dataObject from "../../nav-list/nav-list.json";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.mainfooter}>
      <div className="container">
        <div className={styles.divider} />
        <div className={styles.mainfooter__container}>
          <div className={styles.left_side}>
            <Logo imgSrc="/images/logo-footer.svg" width={250} height={100} />
            <p className={styles.desc}>
              {t("footer.desc")}
            </p>
          </div>
          <div className={styles.right_side}>
            {dataObject.map((item) => (
              <div key={item.id}>
                <h6 className={styles.list_title}>{item.title}</h6>
                <NavList subItems={item.items} styleLink={styles.item_link_footer}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
