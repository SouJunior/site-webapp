import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { dataNavbarMobile } from "../../../utils/dataNavbarMobile";
import styles from "./NavbarMobile.module.css";

export const NavbarMobile = () => {
  const router = useRouter();

  return (
    <ul className={styles.menuNav}>
      {dataNavbarMobile.map((link, index) => (
        <li className={styles.linkNav} key={index}>
          <Link href={link.path} passHref scroll={false}>
            <a className={router.asPath === link.path ? styles.active : ""}>
              {link.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
