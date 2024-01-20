import React from "react";
import CardBg from "./card-bg";
import styles from "./hero-header.module.css";

const HeroHeader: React.FC = () => {
  return (
    <div className={styles.hero_header}>
      <div className={styles.wrapper_card}>
        <CardBg />
      </div>
    </div>
  );
};

export default HeroHeader;
