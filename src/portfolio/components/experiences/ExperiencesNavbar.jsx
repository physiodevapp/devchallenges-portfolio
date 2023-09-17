import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme';

export const ExperiencesNavbar = ({ onChangeType: handleExperienceType, type }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const handleClick = (event, webside) => {
    event.preventDefault();
    handleExperienceType(webside);
  };

  return (
    <>
      <nav className={`${darkMode} navbar navbar-experiences border-0 ${isDark ? 'bg-dark' : 'bg-light'} border rounded mb-2`}>
        <div className="container-fluid justify-content-center">

          {/* Filter by tags */}
          
          <nav className="experiences nav nav-pills flex-sm-row">
            <a className={`flex-sm-fill text-sm-center nav-link ${type === 'job' ? 'active' : ''}`} href="#" onClick={(ev) => handleClick(ev, "job")}>Experience</a>
            <a className={`flex-sm-fill text-sm-center nav-link ${type === 'education' ? 'active' : ''}`} href="#" onClick={(ev) => handleClick(ev, "education")}>Education</a>
          </nav>
        </div>
      </nav>
    </>
  )
}
