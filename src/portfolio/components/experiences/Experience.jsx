import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

export const Experience = ({ title, description, from, to, image: imageUrl }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  return (
    <>
      <div className={`${darkMode} card card-experience border-0 ${isDark ? 'bg-transparent mb-4 text-light' : 'pt-2 mb-2 ms-2 me-2'}`}>
        <div className="row g-0">
          <div className='col pb-1'>
            <div className="card-body pt-0 pb-0 lead">
              <span className='card-title text-capitalize'>{from} - {to}</span>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-xl-3 ps-4 pt-2 pe-0 d-flex justify-content-center justify-content-xl-start align-items-start">
            <div className='vr'></div>
            <img src={imageUrl} className="img-fluid img-thumbnail rounded-4" alt="..." />
          </div>
          <div className="col-8 col-xl-9 pb-1 d-flex align-items-start pt-2">
            <div className="card-body pt-0 pb-0">
              <h5 className="card-title text-capitalize pt-1">{title}</h5>
              <span className="card-title d-flex">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
