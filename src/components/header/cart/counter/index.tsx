import React from "react";
import styles from "./counter.module.css";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <div className={styles.counter}>{count}</div>;
};

export default Counter;
