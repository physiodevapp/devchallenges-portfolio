// import React;
import { Project } from './Project';

export const Projects = ({projects}) => { 

  return (
    <>
      {
        projects.map(({id, title, description, image}) => (
          <Project key={id} title={title} description={description} image={image}/>
        ))
      }
    </>
  );
};
