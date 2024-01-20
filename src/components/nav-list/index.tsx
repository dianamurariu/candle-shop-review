import React from "react";
import styles from "./nav-list.module.css";

export interface SubItem {
  id: number;
  name: string;
}

interface NavListProps {
  subItems: SubItem[];
  styleLink: string;
}

const NavList: React.FC<NavListProps> = ({ subItems, styleLink }) => {
  return (
    <ul>
      {subItems.map((subItem) => (
        <li key={subItem.id} className={styles.list_sub_item}>
          <a href="/somepage" className={styleLink}>
            {subItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
