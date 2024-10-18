import React from "react";
import { DailyCallsViewProps } from "../types";

const HomeView: React.FC<DailyCallsViewProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Here is the content of the daily calls page.</p>
    </div>
  );
};

export default HomeView;
