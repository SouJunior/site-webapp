import React from "react";
import HomeView from "../view/home.view";

const HomeController: React.FC = () => {
  const title = "Today's Daily Calls";

  return <HomeView title={title} />;
};

export default HomeController;
