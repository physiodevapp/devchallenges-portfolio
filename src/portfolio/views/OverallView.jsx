import React from "react";
import { AboutMe, Experiences, Hobbies, Projects, ProjectsNavbar } from "../components";

export const OverallView = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3 pb-2">
          <div className="col col-12 col-sm-5 col-md-4 col-lg-3">
            {/* About me, professional dev career... */}
            <AboutMe/>
            <Experiences/>
            <Hobbies/>
          </div>
          <div className="col">
            <ProjectsNavbar/>
            <Projects/>
          </div>
        </div>
      </div>
    </>
  );
};
