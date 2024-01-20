import React from "react";
import styles from "./grid-layout.module.css";

interface GridLayoutProps {
  children: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
  return <div className={styles.grid_layout}>{children}</div>;
};

export default GridLayout;
