import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/Theme';

export const GoupButton = ({showGoUp}) => { 
  
  const [exitGoUp, setExitGoUp] = useState(null);

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const handleClick = () => {
    setExitGoUp(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (showGoUp) {
      setExitGoUp(false);
    }
    
  }, [showGoUp])
  

  return (
    <>
      {exitGoUp !== null && <button type="button" onClick={handleClick} className={`${darkMode} btn border border-2 border-light ${isDark ? 'btn-dark' : 'btn-primary'} go-up-button ${showGoUp && !exitGoUp ? 'animate__animated animate__bounceInRight' : 'animate__animated animate__fadeOut'}`}>
        <i className="fa fa-arrow-up fs-4" aria-hidden="true" onClick={handleClick}></i>
      </button>}
    </>
  );
};
