import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function getDefaultTheme() {
  return localStorage.getItem('dark_mode') === 'true' ? true : false;
}

const Theme = ({ children }) => {

  // console.log(getDefaultTheme())

  const [isDark, setIsDark] = useState(getDefaultTheme());

  const handleTheme = (value) => {
    // console.log('handleTheme')
    setIsDark(() => value);

    localStorage.setItem('dark_mode', value);
  }

  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { Theme as default, ThemeContext };