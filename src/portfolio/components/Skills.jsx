import React from 'react';

export const Skills = () => {
  return (
    <>
      <div className="card mb-4">
        <h5 className="card-header">Skills</h5>
        <div className="card-body d-flex justify-content-evenly flex-wrap">
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
