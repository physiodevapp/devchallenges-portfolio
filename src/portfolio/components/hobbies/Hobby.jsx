import React from 'react';

export const Hobby = () => {
  return (
    <div>
      <div className="card text-bg-dark border-0 m-2">
        <img src="https://images.hola.com/imagenes/mascotas/20220729214547/pajaro-dodo-curiosidades-ave-extinguida-dn/1-121-94/curiosidades-sobre-la-extincion-del-pajaro-dodo-t.jpg?tx=w_680"  className="card-img" alt="..."/>
          <div className="card-img-overlay hobby-img-overlay">
            {/* <h5 className="card-title">Card title</h5> */}
            <h6 className="card-text" style={{position: "absolute", bottom: "10px"}}>Irure ex reprehenderit eu ipsum consectetur.</h6>
          </div>
      </div>
    </div>
  );
};
