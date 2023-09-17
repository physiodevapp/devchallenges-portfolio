import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function getDefaultTheme() {
  return localStorage.getItem('dark_mode') === 'true' ? true : false;
}

const Theme = ({ children }) => {

  const [isDark, setIsDark] = useState(getDefaultTheme());

  const handleTheme = (value) => {
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