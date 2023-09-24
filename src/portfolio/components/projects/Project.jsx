import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/Theme';

export const Project = ({ title, description, image: imageUrl, demo: demoUrl, code: codeUrl }) => {

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnload = () => {
    // console.log('image loaded');
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <div className={`card mb-3 d-none d-md-flex placeholder-glow bg-transparent`}>
        <div className="row g-0">
          <span className="col-md-4 project-bg-img rounded-start placeholder">
          </span>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className={`${darkMode} card-title placeholder rounded-2 col-4`}></h4>
              <h4 className={`${darkMode} card-text d-none d-sm-flex placeholder rounded-2 col-10 mb-4`}></h4>
              <span className="btn me-2 placeholder col-3"></span>
              <span className="btn placeholder col-3"></span>
            </div>
          </div>
        </div>
      </div>}

      {isLoaded && <div className={`${darkMode} card card-child card-project mb-2 d-none d-md-flex bg-transparent border border-0 ${!isDark ? 'm-2 rounded-2 p-2 ps-3 pe-3' : ''}`}>
        <div className="row g-0">
          <div className="col-md-4 project-bg-img rounded-start border-0"  style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <img src={imageUrl} onLoad={handleOnload} style={{display: "none"}} />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>{title}</h5>
              <p className={`card-text d-none d-sm-flex ${isDark ? 'text-light' : ''}`}>{description}</p>
              {demoUrl.length > 0 && <a href={demoUrl} target="_blank" rel="noreferrer" className={`btn ${isDark ? 'btn-light' : 'border border-0 btn-light'} me-2`}>View</a>}
              <a href={codeUrl} target="_blank" rel="noreferrer" className={`btn ${isDark ? 'btn-outline-light' : 'border border-1 btn-warning text-white'}`}>Code</a>
            </div>
          </div>
        </div>
      </div>}

      {/* Small screens */}

      {!isLoaded && <div className="card text-bg-dark border-0 m-2 d-md-none placeholder-glow bg-transparent">
        <span className={`card-img placeholder ${isDark ? 'border border-2 border-secondary' : ''}`} style={{ height: "200px", backgroundColor: 'transparent' }}></span>
        <span className="card-img-overlay hobby-img-overlay">
          <span className='col-12 ms-4' style={{ position: "absolute", bottom: "10px", left: "0px" }}>
            <span className={`${darkMode} btn btn-secondary placeholder col-3`}></span>
            <span className={`${darkMode} btn btn-secondary ms-2 placeholder col-3`}></span>
          </span>
          <h2 className={`${darkMode} card-title ms-4 placeholder rounded-2 col-5`} style={{ position: "absolute", top: "10px", left: "0px" }}></h2>
        </span>
      </div>}

      {<div className={`${darkMode} card card-child project-sm text-bg-dark border-0 m-2 d-md-none bg-transparent ${isLoaded ? '' : 'd-none'} ${!isDark ? 'rounded-2 p-0 ps-0 pe-0' : ''}`}>
        <img src={imageUrl} onLoad={handleOnload} className="card-img" alt="..." />
        <div className="card-img-overlay hobby-img-overlay">
          <h5 className={`card-title ms-4 p-1 ps-2 pe-2 rounded-2 bg-dark border border-white bg-opacity-75`} style={{ position: "absolute", top: "10px", left: "0px" }}>{title}</h5>
          <div className='col-12 ms-4' style={{ position: "absolute", bottom: "10px", left: "0px" }}>
            {demoUrl.length > 0 && <a href={demoUrl} target="_blank" rel="noreferrer" className={`btn ${isDark ? 'btn-light me-2' : 'btn-light me-2'} col-3`}>View</a>}
            <a href={codeUrl} target="_blank" rel="noreferrer" className={`btn ${isDark ? 'btn-dark' : 'border border-1 text-light btn-warning'} ms-0 col-3`}>Code</a>
          </div>
        </div>
      </div>}
    </>
  );
};
