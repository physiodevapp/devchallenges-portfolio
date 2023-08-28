import React from 'react';

export const ProjectsNavbar = () => {
  return (
    <>
      <nav className="navbar bg-light border rounded mb-2">
        <div className="container-fluid">
          {/* Navbar title */}
          <span className="navbar-brand mb-0 h1 d-none d-lg-flex">Projects &nbsp;[ 2 ]</span>
          {/* Dropdown filter + Navbar title */}
          <div className="dropdown d-lg-none">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects &nbsp;[ 2 ]
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">React</a></li>
              <li><a className="dropdown-item" href="#">Javascript</a></li>
              <li><a className="dropdown-item" href="#">Backend</a></li>
            </ul>
          </div>
          {/* Filter by tags */}
          <nav className="nav nav-pills flex-sm-row d-none d-lg-flex">
            <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">React</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Javascript</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Backend</a>
          </nav>
          {/* Dropdown pagination */}
          <div className="dropdown d-md-none">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Page 1/3
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Page 1</a></li>
              <li><a className="dropdown-item" href="#">Page 2</a></li>
              <li><a className="dropdown-item" href="#">Page 3</a></li>
            </ul>
          </div>
          {/* Pagination */}
          <nav aria-label="Page navigation example" className='d-none d-md-flex'>
            <ul className="pagination justify-content-end m-0">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};
