import React from 'react'

export const GoupButton = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button type="button"  onClick={handleClick} className="btn btn-primary go-up-button">Go up</button>
    </>
  )
}
