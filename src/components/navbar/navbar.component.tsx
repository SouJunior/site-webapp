import React, { FC } from "react";
import ATag from "../.global/a-tag/a-tag.component";
// import logo from "../../public/assets/mini-logo.svg";
// import Image from "next/image";

import { NavbarProps } from "./types";
import { StyledNav } from "./navbar.styled";

const Navbar: FC<NavbarProps> = ({ handleLink }) => {
  return (
    <StyledNav>
      {/* <Image src={logo} alt="Logo" /> */}
      <ATag className="nav-link" onClick={handleLink}>
        Home
      </ATag>
      <ATag className="nav-link" onClick={handleLink}>
        Sobre Nós
      </ATag>
      <ATag className="nav-link" onClick={handleLink}>
        Iniciativas
      </ATag>
      <ATag className="nav-link" onClick={handleLink}>
        Depoimentos
      </ATag>
      <ATag className="nav-link" onClick={handleLink}>
        Faça Parte
      </ATag>
    </StyledNav>
  );
};

export default Navbar;
