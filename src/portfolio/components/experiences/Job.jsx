import React from 'react';

export const Job = () => {
  return (
    <>
      <div className="card mt-2 border-0 ">
        <div className="row g-0">
          <div className="col-md-4 p-2 pe-0">
            <img src="https://images.hola.com/imagenes/mascotas/20220729214547/pajaro-dodo-curiosidades-ave-extinguida-dn/1-121-94/curiosidades-sobre-la-extincion-del-pajaro-dodo-t.jpg?tx=w_680" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body pt-0">
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
