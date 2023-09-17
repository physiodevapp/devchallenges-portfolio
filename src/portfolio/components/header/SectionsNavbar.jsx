import React, { useEffect, useState } from 'react';

const SectionsNavbar = ({ section, showTime }) => {

  const [sectionClassSelected, setSectionClassSelected] = useState(null);

  const handleClick = (event, sectionClass) => {

    event.preventDefault();

    if (showTime > 1) {
      setSectionClassSelected(sectionClass);

      const targetElement = document.getElementsByClassName(sectionClass)[0];

      window.scrollTo(0, targetElement.offsetParent.offsetTop - targetElement.offsetTop - targetElement.offsetHeight - targetElement.clientHeight + 6);
    }

  };

  useEffect(() => {
    if (section === sectionClassSelected) {
      setSectionClassSelected(null);
    }
  }, [section]);


  return (
    <>
      <ul className={`nav nav-pills sections-nav ms-3 border border-secondary border-0 rounded-2 ${showTime > 0.9 ? 'start-0' : ''} animate__animated ${showTime > 1 ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}`}>
        <li className={`nav-item`}>
          <a className={`nav-link rounded-start rounded-0 ps-0 pe-0 fs-6 ${sectionClassSelected === 'projects' || (section === 'projects' && !sectionClassSelected) ? 'active' : ''} text-secondary d-flex align-items-end`} href="#" onClick={(ev) => handleClick(ev, 'projects')}>
            <i className="fa-solid fa-code"></i>
            <span className='d-none d-lg-flex ps-2'>Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link rounded-0 ps-2 ps-md-3 pe-0 fs-6 ${sectionClassSelected === 'experiences' || (section === 'experiences' && !sectionClassSelected) ? 'active' : ''} text-secondary d-flex align-items-end`} href="#" onClick={(ev) => handleClick(ev, 'experiences')}>
            <i className="fa-solid fa-briefcase"></i>
            <span className='d-none d-lg-flex ps-2'>Experience</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link rounded-0 rounded-end ps-2 ps-md-3 pe-0 fs-6 ${sectionClassSelected === 'hobbies' || (section === 'hobbies' && !sectionClassSelected) ? 'active' : ''} text-secondary d-flex align-items-end`} href="#" onClick={(ev) => handleClick(ev, 'hobbies')}>
            <i className="fa-regular fa-heart"></i>
            <span className='d-none d-lg-flex ps-2'>Hobbies</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SectionsNavbar;