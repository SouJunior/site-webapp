import React from "react";
import Link from "next/link";
import { dataNavbar } from "../../../utils/dataNavbar";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <ul className={styles.menuNav}>
      {dataNavbar.map((link, index) => (
        <li className={styles.linkNav} key={index}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
