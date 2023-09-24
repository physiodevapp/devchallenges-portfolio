import React, { useContext, useEffect } from 'react';
import { Experience } from './Experience';
import { ThemeContext } from '../../contexts/Theme';



export const Experiences = ({ experiences }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  return (
    <>
      <div className={`${darkMode} card mb-5 ${isDark ? 'bg-dark border border-3 border-dark pt-4' : 'pt-2'}`}>
        {/* <div className="experiences card-header text-center text-sm-start fs-5 mb-2">Experience & Education</div> */}
        {
          experiences.map(({ id, title, description, from, to, link, image }, index) => (
            <div key={id} className='col border-1'>
              <Experience key={id} title={title} description={description} from={from} to={to} image={image} link={link} />
              {index < experiences.length - 1 && <hr />}
            </div>
          ))
        }
        {/* TODO */}
        { experiences.length > 3 && <div className="container-fluid d-flex">
          <button type="button" className={`btn m-2 mb-3 w-100 ${isDark ? 'btn-dark border border-1 border-secondary' : ''}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">See more</button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div> }

      </div>
    </>
  );
};
