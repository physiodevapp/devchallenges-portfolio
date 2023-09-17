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
          experiences.map(({ id, title, description, from, to, image }, index) => (
            <div key={id} className='col border-1'>
              <Experience key={id} title={title} description={description} from={from} to={to} image={image} />
              { index < experiences.length - 1 && <hr/> }
            </div>
          ))
        }        
      </div>
    </>
  );
};
