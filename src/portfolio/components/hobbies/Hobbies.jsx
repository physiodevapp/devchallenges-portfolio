import React, { useContext } from 'react';
import { Hobby } from './Hobby';
import { ThemeContext } from '../../contexts/Theme';

export const Hobbies = ({ hobbies }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  return (
    <>
      <nav className={`${darkMode} navbar navbar-hobbies border ${isDark ? 'bg-dark text-light border-0 border-light' : 'bg-light border-0'} rounded mb-2`}>
        <div className="container-fluid justify-content-center fs-5">
                   
          <nav className={`hobbies navbar-brand nav nav-pills flex-sm-row h1 ${isDark ? 'text-light' : ''}`}>
            Hobbies
          </nav>
        </div>
      </nav>

      <div className={`${darkMode} card mb-4 d-flex ${isDark ? 'bg-dark border border-3 border-dark' : ''}`}>

        {/* <div className={`hobbies card-header text-center text-sm-start fs-5 ${isDark ? 'bg-dark text-white border-bottom' : ''}`}>Hobbies</div> */}

        <div className='row d-none d-sm-flex'>
          <div className='col border border-0'>
            {
              hobbies.map(({ id, title, image }) => (
                <Hobby key={id} title={title} image={image} />
              ))
            }
          </div>
        </div>

        {/* Small screens */}

        <div className={`row d-flex d-sm-none`}>
          {
            hobbies.map(({ id, title, image }) => (
              <div key={id} className='col-6'>
                <Hobby key={id} title={title} image={image} />
              </div>
            ))
          }
        </div>
      </div>

      {/* Small screens */}

      {/* <div className="card mb-4 d-sm-none">
        <div className="card-header text-center text-sm-start fs-4">Hobbies</div>
        <div className='row'>
          {
            hobbies.map(({ id, title, image }) => (
              <div key={id} className='col-6'>
                <Hobby key={id} title={title} image={image} />
              </div>
            ))
          }
        </div>
      </div> */}
    </>
  );
};
