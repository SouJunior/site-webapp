import { useState } from "react";

import styles from "./MenuMobile.module.css";
import { Divide as Hamburger } from "hamburger-react";
import { NavbarMobile } from "../NavbarMobile";

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => setOpen(!isOpen);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={handleToggle} rounded />
      <div className={isOpen ? styles.show : styles.hide}>
        <NavbarMobile />
      </div>
    </>
  );
};
