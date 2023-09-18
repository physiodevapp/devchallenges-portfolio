import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

export const ProjectsNavbar = ({ onChangeWebside: handleProjectWebside, webside }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const handleClick = (event, webside) => {
    event.preventDefault();
    handleProjectWebside(webside);
  };

  return (
    <>
      <nav className={`${darkMode} navbar navbar-projects border-0 ${isDark ? 'bg-dark' : 'bg-light'} border rounded mb-2`}>
        <div className="container-fluid justify-content-center justify-content-md-between">

          {/* Navbar title */}

          <span className={`navbar-brand ms-2 mb-0 h1 d-none d-md-flex ${isDark ? 'text-light' : 'text-light'}`}>Projects</span>

          {/* Filter by tags */}

          <nav className="projects nav nav-pills flex-sm-row">
            <a className={`flex-sm-fill text-sm-center nav-link ${webside === 'all' ? 'active' : ''}`} role='button' href="#" onClick={(ev) => handleClick(ev, "all")}>All</a>
            <a className={`flex-sm-fill text-sm-center nav-link ${webside === 'frontend' ? 'active' : ''}`} role='button' href="#" onClick={(ev) => handleClick(ev, "frontend")}>
              <span className='d-none d-lg-flex'>Frontend</span>
              <span className='d-lg-none'>Front</span>
            </a>
            <a className={`flex-sm-fill text-sm-center nav-link ${webside === 'backend' ? 'active' : ''}`} href="#" onClick={(ev) => handleClick(ev, "backend")}>
              <span className='d-none d-lg-flex'>Backend</span>
              <span className='d-lg-none'>Back</span>
            </a>
            <a className={`flex-sm-fill text-sm-center nav-link ${webside === 'full-stack' ? 'active' : ''}`} href="#" onClick={(ev) => handleClick(ev, "full-stack")}>
              <span className='d-none d-lg-flex'>Full stack</span>
              <span className='d-lg-none'>Full</span>
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};
