import React from "react";
import styles from "./card-testimonial.module.css";

interface CardProps {
  imgSrc: string;
  review: string;
  author: string;
  starSrc: string;
}

const CardTestimonial: React.FC<CardProps> = ({ imgSrc, review, author, starSrc }) => {
  return (
    <div className={styles.card_testimonial}>
      <div className={styles.container_inner}>
        <div className={styles.image_container}>
          <img src={imgSrc} alt="profile" width={84} height={84} />
          <img src={starSrc} alt="stars" width={146} height={24} />
        </div>
        <p className={styles.review}>{review}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
