import React, { useState } from "react";
import styles from "./nav-bar.module.css";
import NavButton from "../nav-button";
import MegaMenu from "../mega-menu";
import { SubItem } from "../../nav-list";
import dataList from "../../nav-list/nav-list.json";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const [t] = useTranslation("global");

  const [activeDropdown, setActiveDropdown] = useState<string>("");

  // Find data for Discovery and About dropdowns
  const discoveryData = dataList.find((item) => item.title === "Discovery");
  const aboutData = dataList.find((item) => item.title === "About");

  // Extract data for Discovery and About dropdown
  const dropDownDiscovery: SubItem[] = discoveryData?.items || [];
  const dropDownAbout: SubItem[] = aboutData?.items || [];

  // Function to toggle the active dropdown
  const toggleDropDown = (dropdownName: string): void => {
    setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
  };

  return (
    <>
      <div className={styles.nav__bar}>
        <NavButton text={t("header.nav.discovery")} handleClick={() => toggleDropDown("discovery")}/>
        <NavButton text={t("header.nav.about")} handleClick={() => toggleDropDown("about")}/>
        <NavButton text={t("header.nav.contact")} href="/contact" isLink={true}/>
      </div>
      {activeDropdown === "discovery" && (
        <MegaMenu dropDownObject={[{ subItems: dropDownDiscovery }]} show={true}/>
      )}
      {activeDropdown === "about" && (
        <MegaMenu dropDownObject={[{ subItems: dropDownAbout }]} show={true} />
      )}
    </>
  );
};

export default NavBar;
