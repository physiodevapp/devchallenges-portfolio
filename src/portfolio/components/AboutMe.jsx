import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

export const AboutMe = ({ name, aboutme, image: imageUrl }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const handleClick = (event, propagation) => {
    if (propagation) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className={`${darkMode} card card-aboutme mb-5 d-none d-sm-flex ${isDark ? 'bg-dark text-light border border-3 border-dark' : 'bg-transparent'}`} >
        <div className={`border rounded-circle m-3 ${isDark ? 'border-1 border-light' : 'border-1 border-light'}`}>
          <img src={imageUrl} className={`card-img-top ${isDark ? 'p-1' : 'p-1'} rounded-circle`} alt="..." />
        </div>

        <div className="btn-group p-3 pt-1 pb-1" role="group" aria-label="Basic example">
          <a href='https://www.linkedin.com/in/edu-gamboa/' target="_blank" rel="noreferrer" type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4 border-end-0`} onClick={(ev) => handleClick(ev, false)}><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/physiodevapp' target="_blank" rel="noreferrer" type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4 border-end-2`} onClick={(ev) => handleClick(ev, false)}><i className="fa-brands fa-github"></i></a>
          {/* <a href='#' type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4`} onClick={(ev) => handleClick(ev, true)}>CV</a> */}
        </div>

        <div className="card-body">
          <p className={`card-text lead ${!isDark ? 'rounded-2 p-2 ps-3 pe-3' : ''}`}><em>{aboutme}</em></p></div>
      </div>

      {/* Small screens */}

      <div className={`${darkMode} card card-aboutme mb-5 d-sm-none aboutme-sm ${isDark ? 'bg-dark text-light border border-3 border-dark' : ''}`}>
        {/* <div className="card-header text-center text-sm-start fs-4 d-sm-none">About me</div> */}
        <div className="row g-0">
          <div className="col-4 d-flex align-items-start align-items-sm-center">
            <div className={`border rounded-circle m-3 ${isDark ? 'border-1 border-light' : 'border-1 border-light'}`}>
              <img src={imageUrl} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-8 d-flex align-items-center">
            <div className="card-body">
              <p className={`card-text lead fs-6 ${!isDark ? 'rounded-2 p-2 ps-3 pe-3' : ''}`}><em>{aboutme}</em></p>
            </div>
          </div>
          <div className="content-fluid btn-group p-3 pt-1" role="group" aria-label="Basic example">
            <a href='https://www.linkedin.com/in/edu-gamboa/' target="_blank" rel="noreferrer" type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4 border-end-0`} onClick={(ev) => handleClick(ev, false)}><i className="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/physiodevapp' target="_blank" rel="noreferrer" type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4 border-end-2`} onClick={(ev) => handleClick(ev, false)}><i className="fa-brands fa-github"></i></a>
            {/* <a href='#' type="button" className={`btn ${isDark ? 'btn-dark border-secondary' : 'btn-outline-light border border-2'} pt-0 pb-0 fs-4`} onClick={(ev) => handleClick(ev, true)}><i className="fa-brands fa-google"></i></a> */}
          </div>
        </div>
      </div>
    </>
  );
};
