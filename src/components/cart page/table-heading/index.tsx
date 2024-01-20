import React from "react";
import styles from "./table-heading.module.css";
import CartLayout from "../../layout/cart-layout";

interface TableProps {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}

const TableHeading: React.FC<TableProps> = ({ col1, col2, col3, col4 }) => {
  return (
    <div className={styles.wrapper_table}>
      <CartLayout>
        <h6 className={styles.table_title}>{col1}</h6>
        <h6 className={`${styles.table_title} ${styles.right_aligned}`}>{col2}</h6>
        <h6 className={`${styles.table_title} ${styles.right_aligned}`}>{col3}</h6>
        <h6 className={`${styles.table_title} ${styles.right_aligned}`}>{col4}</h6>
      </CartLayout>
      <div className={styles.divider} />
    </div>
  );
};

export default TableHeading;
