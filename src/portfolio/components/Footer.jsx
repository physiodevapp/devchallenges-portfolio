import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme';

export const Footer = () => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : "";

  return (
    <div className={`footer ${isDark ? 'bg-dark text-light' : ''}`}>
      <h5>Footer</h5>
    </div>
  )
}
