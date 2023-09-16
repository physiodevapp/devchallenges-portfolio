import React from "react";
import { PortfolioLayout } from "./portfolio/layout";
import { OverallView } from "./portfolio/views/OverallView";
import Theme from "./portfolio/contexts/Theme";

export const PortfolioApp = () => {
  return (
    <>
    <Theme>
      <PortfolioLayout>
        <OverallView/>
      </PortfolioLayout>
    </Theme>
    </>
  );
};
