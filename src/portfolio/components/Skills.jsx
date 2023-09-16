import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

export const Skills = () => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : "";

  return (
    <>
      <nav className={`${darkMode} navbar border-0 d-none d-md-flex ${isDark ? 'bg-dark text-light' : 'bg-light'} border rounded mb-2`}>
        <div className="container-fluid justify-content-start fs-4">
          <nav className="hobbies nav nav-pills flex-sm-row">
          <span className={`navbar-brand mb-0 h1 d-none d-md-flex ${isDark ? 'text-light': ''}`}>Skills</span>
          </nav>
        </div>
      </nav>

      <div className={`${darkMode} card mb-5 d-none d-md-flex ${isDark ? 'bg-dark border border-3 border-dark': ''}`}>
        {/* <h5 className="card-header">Skills</h5> */}
        <div className={`card-body d-flex justify-content-evenly flex-wrap`}>
          <img className='img-fluid skill-img rotate-center-1' src='https://cdn.iconscout.com/icon/free/png-512/free-html-59-225995.png?f=avif&w=256' aria-label='html'/>
          <img className='img-fluid skill-img rotate-center-2' src='https://cdn.iconscout.com/icon/free/png-512/free-css3-8-1175200.png?f=avif&w=256' alt='css'/>
          <img className='img-fluid skill-img rotate-center-1' src='https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=avif&w=256' alt='express'/>
          <img className='img-fluid skill-img rotate-center-2' src='https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=avif&w=256' alt='react'/>
          <img className='img-fluid skill-img rotate-center-1' src='https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=avif&w=256' alt='mongoDB'/>
          <img className='img-fluid skill-img rotate-center-1' src='https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=avif&w=256' alt='node'/>
          <img className='img-fluid skill-img rotate-center-2' src='https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-6-1175203.png?f=avif&w=256' alt='bootstrap'/>
        </div>
      </div>
    </>
  );
};
