import React from 'react';

export const Job = () => {
  return (
    <>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <h5 className="card-title">Job title</h5>
              <p className="card-text">Fugiat labore sunt reprehenderit cupidatat in sit et ea voluptate do pariatur est nostrud dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
