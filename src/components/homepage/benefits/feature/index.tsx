import React from "react";
import styles from "./feature.module.css";
import { iconDimensions } from "../../../../config";

interface FeatureProps {
  imgSrc: string;
  name: string;
  desc: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, name, desc }) => {
  return (
    <span className={styles.feature}>
      <img
        src={imgSrc}
        alt="checkmark"
        width={iconDimensions().small}
        height={iconDimensions().small}
        className={styles.feature_icon}
      />
      <span className={styles.feature_name}>{name}</span>
      <span className={styles.feature_desc}>{desc}</span>
    </span>
  );
};

export default Feature;
