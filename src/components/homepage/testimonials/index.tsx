import React from "react";
import styles from "./testimonials.module.css";
import Title from "../../title";
import CardTestimonial from "./card-testimonial";
import cards from "./testimonials.json";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.container_inner}>
          <Title level="h2" className={styles.title}>
            {t("home.testimonials.title")}
          </Title>
          <Title level="h5" className={styles.subtitle}>
            {t("home.testimonials.subtitle")}
          </Title>
          <div className={styles.wrapper_cards}>
            {cards.map(({ id, author, review, imgSrc, starSrc }) => (
              <div key={id}>
                <CardTestimonial author={author} review={review} imgSrc={imgSrc} starSrc={starSrc}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
