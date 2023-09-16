import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

export const ThemeButton = ({ faLight, faDark, showTime }) => {

  const { isDark, handleTheme } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : "";

  const handleToggle = (event) => {
    if (showTime > 1) {
      handleTheme(event.target.checked);
    }
  };

  return (
    <>
      <span className={`theme-button me-3 ${showTime > 0.9 ? 'end-0' : ''}`}>
        <input type="checkbox" id="switchDark" name="switchDark" onChange={handleToggle} checked={isDark} />
        <label htmlFor="switchDark" className={`border border-secondary border-0 rounded-2 animate__animated ${showTime > 1 ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}>
          <div id="uncheckedIcon"><i className={`${faLight} rotate-center-1 fs-5`}></i></div>
          <div id="checkedIcon"><i className={`${faDark} rotate-center-2 fs-5`}></i></div>
        </label>
      </span>
    </>
  );
};

ThemeButton.defaultProps = {
  faLight: "fa-solid fa-sun",
  faDark: "fa-solid fa-moon"
};
