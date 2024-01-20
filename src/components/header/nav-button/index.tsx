import React from "react";
import styles from "./nav-button.module.css";

interface NavButtonProps {
  text: string;
  href?: string;
  isLink?: boolean;
  handleClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, href, isLink, handleClick }) => {
  return (
    <>
      {isLink ? (
        <a className={styles.nav__button} href={href}>
          {text}
        </a>
      ) : (
        <button className={styles.nav__button} onClick={handleClick}>
          {text}
          <img className={styles.image} src="/images/chevron-down.svg" alt="icon" width={14} height={14}/>
        </button>
      )}
    </>
  );
};

export default NavButton;
