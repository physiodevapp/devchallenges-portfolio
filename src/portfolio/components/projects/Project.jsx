import React from 'react';

export const Project = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 project-bg-img rounded-start" style={{backgroundImage: `url(${"https://images.hola.com/imagenes/mascotas/20220729214547/pajaro-dodo-curiosidades-ave-extinguida-dn/1-121-94/curiosidades-sobre-la-extincion-del-pajaro-dodo-t.jpg?tx=w_680"})`}}>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Officia sunt sint consequat exercitation pariatur duis eu veniam incididunt eiusmod anim adipisicing.</p>
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
