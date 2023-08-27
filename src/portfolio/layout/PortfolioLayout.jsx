import React from "react";
import { Footer, Header } from "../components";

export const PortfolioLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col p-0">{children}</div>
        </div>
        <div className="row">
          <div className="col p-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
