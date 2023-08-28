import React, { useEffect, useState } from "react";
import { Footer, GoupButton, Header } from "../components";

export const PortfolioLayout = ({ children }) => {

  const [showGoUp, setShowGoUp] = useState(false);

  const handleScroll = () => {
    const scrollIndex = (window.scrollY / window.outerHeight).toFixed(2);
    if (scrollIndex > 0.4) {
      setShowGoUp(true)
    } else {
      setShowGoUp(false)
    }
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  

  return (
    <>
      {showGoUp && <GoupButton/>}
      <div className="container-fluid" onScroll={handleScroll}>
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
