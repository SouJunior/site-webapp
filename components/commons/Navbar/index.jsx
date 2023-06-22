import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { dataNavbar } from "../../../utils/dataNavbar";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const router = useRouter();

  return (
    <ul className={styles.menuNav}>
      {dataNavbar.map((link, index) => (
        <li className={styles.linkNav} key={index}>
          <Link href={link.path} passHref>
            <a className={router.pathname === link.path ? styles.active : ""}>
              {link.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
