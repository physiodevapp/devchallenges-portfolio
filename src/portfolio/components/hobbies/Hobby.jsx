import React from 'react';

export const Hobby = ({title, image: imageUrl}) => {
  return (
    <>
      <div className="card text-bg-dark border-0 m-2">
        <img src={imageUrl}  className="card-img" alt="..."/>
          <div className="card-img-overlay hobby-img-overlay">
            {/* <h5 className="card-title">Card title</h5> */}
            <h6 className="card-text d-sm-flex ms-0 ms-md-1 p-1 ps-2 pe-2 rounded-2 bg-dark border border-1 border-white bg-opacity-75" style={{position: "absolute", bottom: "10px"}}>{title}</h6>
          </div>
      </div>
    </>
  );
};
