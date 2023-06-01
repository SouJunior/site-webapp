import React from "react";

import { Header } from "../commons/Header";
import { Footer } from "../commons/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
