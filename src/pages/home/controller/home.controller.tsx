import React, { FC, MouseEvent } from "react";
import HomeView from "../view/home.view";

const HomeController: FC = () => {
  const handleLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = "https://google.com";
  };

  return <HomeView handleLink={handleLink} />;
};

export default HomeController;
