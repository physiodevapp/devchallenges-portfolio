import React, { useEffect, useState } from "react";
import { AboutMe, Experiences, Hobbies, Projects, ProjectsNavbar, Skills } from "../components";
import dataProjects from "../../data/projects.json"; 
import {name, aboutme, image} from "../../data/about-me.json";

export const OverallView = () => {

  const [projects, setProjects] = useState([])
  const [projectWebside, setProjectWebside] = useState('frontend')

  const handleProjectWebside = (webside) => {
    setProjectWebside(webside)
  }

  useEffect(() => {
    setProjects(() => {
      const filteredProjects = dataProjects.filter((project) => project.webside === projectWebside)
      return filteredProjects
    })
  }, [projectWebside])

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3 pb-2">
          <div className="col col-12 col-sm-5 col-md-4 col-lg-3">
            <AboutMe name={name} aboutme={aboutme} image={image} />
            <Experiences/>
            <Hobbies/>
          </div>
          <div className="col">
            <Skills/>
            <ProjectsNavbar projects={projects} onChangeWebside={handleProjectWebside} webside={projectWebside}/>
            <Projects projects={projects}/>
          </div>
        </div>
      </div>
    </>
  );
};
