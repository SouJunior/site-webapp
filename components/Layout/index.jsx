import React from "react";

import { Header } from "../commons/Header";
import { Footer } from "../commons/Footer";
import FooterV2 from "../commons/FooterV2";

export const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <FooterV2 />
    </>
  );
};
