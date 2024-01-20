import React from "react";
import styles from "./benefits.module.css";
import Title from "../../title";
import features from "./benefits.json";
import Feature from "./feature";
import Button from "../../button";
import { useTranslation } from "react-i18next";

const Benefits: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.benefits}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className="left_side">
            <Title level="h2" className={styles.title}>
              {t("home.benefits.title")}
            </Title>
            <Title level="h6" className={styles.subtitle}>
              {t("home.benefits.subtitle")}
            </Title>
            <div className={styles.wrapper_features}>
              {features.map(({ id, name, desc, img }) => (
                <div key={id}>
                  <Feature
                    name={t(`home.benefits.benefitsList.${id}.name`)}
                    desc={t(`home.benefits.benefitsList.${id}.desc`)}
                    imgSrc={img}
                  />
                </div>
              ))}
            </div>
            <Button text={t("home.benefits.btn.learMore")} to="#" />
          </div>
          <div className="right_side">
            <img className={styles.image} src="./images/benefits.svg" alt="benefits"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
