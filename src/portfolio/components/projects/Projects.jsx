// import React;
import { useContext } from 'react';
import { Project } from './Project';
import { ThemeContext } from '../../contexts/Theme';

export const Projects = ({ projects }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  return (
    <>
      <div className={`${darkMode} card mb-5 ${isDark ? 'bg-dark border border-3 border-dark' : ''}`}>
        <div className='row'>
          <div className='col border-1'>
            {
              projects.map(({ id, title, description, demo, code, image }, index) => (
                <div key={id}>
                  <Project key={id} title={title} description={description} image={image} demo={demo} code={code} />
                  { index < projects.length - 1 && <hr /> }
                </div>
              ))
            }

            {/* {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            }
            {
              projects.map(({ id, title, description, image }) => (
                <Project key={id} title={title} description={description} image={image} />
              ))
            } */}
          </div>
        </div>
      </div>
    </>
  );
};
