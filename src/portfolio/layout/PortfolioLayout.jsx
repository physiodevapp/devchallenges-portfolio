import { Footer, GoupButton, Header } from "../components";
import { ThemeContext } from "../contexts/Theme";
import bgLandscapeDark from '../../../src/assets/background-portfolio-2.jpg'
import bgLandscapeLight from '../../../src/assets/background-portfolio-4.jpg'
import bgPortraitDark from '../../../src/assets/background-portfolio-1.jpg';
import bgPortraitLight from '../../../src/assets/background-portfolio-3.jpg';
import landingBackground from '../../../src/assets/landing-portfolio.png';
import React, { useContext, useEffect, useState } from "react";

function isElementOver(topClass, targetClass, threshold = 0.2) {
  const topElement = document.getElementsByClassName(topClass)[0];
  const targetElement = document.getElementsByClassName(targetClass)[0];
  const isTargetElementOver = Math.round(targetElement.getBoundingClientRect().top - topElement.getBoundingClientRect().height) < window.outerHeight * threshold;

  return isTargetElementOver || false;
}

export const PortfolioLayout = ({ children }) => {

  const [showGoUp, setShowGoUp] = useState(false);
  const [portfolioSection, setPortfolioSection] = useState();
  const [opacity, setOpacity] = useState(0);
  const [parallaxIndex, setParallaxIndex] = useState(0);

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const handleScroll = () => {

    const scrollIndex = (window.scrollY / window.outerHeight).toFixed(2);

    const isBottomPage = document.body.offsetHeight - (window.innerHeight + Math.round(window.scrollY)) <= 1;

    const isNearBottomPage = document.body.offsetHeight - (window.innerHeight + Math.round(window.scrollY)) < 50 && window.scrollY > 0;

    setOpacity(Math.pow(scrollIndex - 0.5 > 0 ? (scrollIndex - 0.5) * 4 : 0, 3));

    setParallaxIndex(Math.pow(scrollIndex - 0.6 > 0 ? (scrollIndex - 0.6) * 4 : 0, 2));

    if (scrollIndex > 0.2 + 1 || isNearBottomPage) {
      setShowGoUp(true);
    } else {
      setShowGoUp(false);
    }

    const isProjectsOver = isElementOver('header', 'projects');
    const isExperiencesOver = isElementOver('header', 'experiences');
    const isHobbiesOver = isElementOver('header', 'hobbies');

    if (isProjectsOver && !isExperiencesOver) {
      setPortfolioSection('projects');
    } else if (isExperiencesOver && !isHobbiesOver && !isNearBottomPage) {
      setPortfolioSection('experiences');
    } else if (isHobbiesOver || isBottomPage) {
      setPortfolioSection('hobbies');
    }
    // if (isBottomPage && portfolioSection !== 'hobbies') {
    //   setPortfolioSection('hobbies');
    // }

  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <GoupButton showGoUp={showGoUp} />

      <div className="sticky-top position-fixed top-0 container-fluid p-0">
        <Header portfolioSection={portfolioSection} opacity={opacity} />
      </div>

      <div className={`bg-portfolio d-md-none`} style={{backgroundImage: `url(${bgPortraitLight})`, top: `${60 - parallaxIndex * 0.8 >= 0 ? 60 - parallaxIndex * 0.8 : 0}px`, zIndex: `${isDark ? '-2' : '-1'}`}}></div>
      <div className={`bg-portfolio d-md-none`} style={{backgroundImage: `url(${bgPortraitDark})`, top: `${60 - parallaxIndex * 0.8 >= 0 ? 60 - parallaxIndex * 0.8 : 0}px`, zIndex: `${isDark ? '-1' : '-2'}`}}></div>

      <div className={`bg-portfolio d-none d-md-flex`} style={{backgroundImage: `url(${bgLandscapeLight})`, top: `${60 - parallaxIndex * 0.8 >= 0 ? 60 - parallaxIndex * 0.8 : 0}px`, zIndex: `${isDark ? '-2' : '-1'}`}}></div>
      <div className={`bg-portfolio d-none d-md-flex`} style={{backgroundImage: `url(${bgLandscapeDark})`, top: `${60 - parallaxIndex * 0.8 >= 0 ? 60 - parallaxIndex * 0.8 : 0}px`, zIndex: `${isDark ? '-1' : '-2'}`}}></div>

      <div className="container-fluid">

        <div className="row">
          <div className="col landing d-flex align-items-end justify-content-end" style={{ backgroundImage: `url(${landingBackground})` }}>
            <span className="text-light fs-3 pb-5 pe-4 position-absolute bottom-0">
              <figure className="text-end">
                <blockquote className=" fs-3blockquote">
                  <p>Edu Gamboa</p>
                </blockquote>
                <figcaption className="text-light blockquote-footer">
                  <cite title="Source Title">Junior Web Developer</cite>
                </figcaption>
              </figure>
            </span>
          </div>
        </div>

        <div className="row">
          <div data-section={portfolioSection} className={`${darkMode} col main bg-transparent ${isDark ? 'border-dark' : ''}`}>
            {children}
          </div>
        </div>

        {/* <div className="row">
          <div className="col p-0">
            <Footer />
          </div>
        </div> */}

      </div>
    </>
  );
};
