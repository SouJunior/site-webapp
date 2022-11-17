import {useState} from "react";

import styles from "./MenuMobile.module.css";
import Hamburger from "hamburger-react";
import {Navbar} from "../Navbar";

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => setOpen(!isOpen);

  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={handleToggle}
        className={styles.teste}
      />
      <div className={isOpen ? styles.teste : styles.hide}>
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
    </>
  );
};
