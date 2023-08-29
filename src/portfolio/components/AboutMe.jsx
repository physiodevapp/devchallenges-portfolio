import React from 'react'

export const AboutMe = ({name, aboutme, image: imageUrl}) => {
  return (
    <>
      <div className="card mb-4" >
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{aboutme}</p>
        </div>
      </div>
    </>
  )
}
