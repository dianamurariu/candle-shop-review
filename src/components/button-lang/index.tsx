import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./button-lang.module.css";

const ButtonLang: React.FC = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState<string>(
    localStorage.getItem("selectedLanguage") || "en"
  );

  // Handle language change when the select value changes
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setActiveLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  useEffect(() => {
    // Update the language when the component mounts
    i18n.changeLanguage(activeLanguage);
  }, [i18n, activeLanguage]);

  return (
    <div className={styles.languageSelect}>
      <select className={styles.select} value={activeLanguage} onChange={handleChange}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default ButtonLang;
