import React from 'react';

export const Project = ({title, description, image: imageUrl}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 project-bg-img rounded-start" style={{backgroundImage: `url(${imageUrl})`}}>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              <a href="#" className="btn btn-primary me-2">Demo</a>
              <a href="#" className="btn btn-outline-primary">Code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
