import React from "react";
import styles from "./mega-menu.module.css";
import NavList, { SubItem } from "../../nav-list";

interface DropDownObject {
  subItems: SubItem[];
}
interface MegaMenuProps {
  dropDownObject: DropDownObject[];
  show: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ dropDownObject, show }) => {
  return (
    <div className={`${styles.mega_menu} ${show ? styles.active : ""}`}>
      <div className="container">
        <div className={styles.mega_menu_container}>
          {dropDownObject &&
            dropDownObject.map((Item) => (
              <NavList styleLink={styles.item_link_header} subItems={Item.subItems}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
