import React from "react";
import { PortfolioLayout } from "./portfolio/layout";
import { OverallView } from "./portfolio/views/OverallView";

export const PortfolioApp = () => {
  return (
    <>
      <PortfolioLayout>
        <OverallView/>
      </PortfolioLayout>
    </>
  );
};
