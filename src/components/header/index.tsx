import React from "react";
import styles from "./header.module.css";
import Logo from "../logo";
import NavBar from "./nav-bar";
import User from "./user";
import Cart from "./cart";
import ButtonLang from "../button-lang";

const Header = () => {
  return (
    <header>
      <section className={styles.header}>
        <div className="container">
          <div className={styles.header__container}>
            <Logo imgSrc="/images/logo-header.svg" width={126} height={34} />
            <NavBar />
            <div className={styles.header__right}>
              <User imgSrc="/images/Profile.svg" to="#" />
              <Cart imgSrc="/images/Cart.svg" to="/cart" />
              <ButtonLang />
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </section>
    </header>
  );
};

export default Header;
