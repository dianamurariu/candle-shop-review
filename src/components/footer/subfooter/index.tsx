import React from "react";
import styles from "./subfooter.module.css";

interface SubfooterProps {
  text: string;
}

const Subfooter: React.FC<SubfooterProps> = ({ text }) => {
  return (
    <div className={styles.subfooter}>
      <div className="container">
        <p className={styles.copyright}>{text}</p>
      </div>
    </div>
  );
};

export default Subfooter;
