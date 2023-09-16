import React, { useEffect, useState } from "react";
import { AboutMe, Experiences, Hobbies, Projects, ProjectsNavbar, Skills, ExperiencesNavbar } from "../components";
import { name, aboutme, image } from "../../data/about-me.json";
import dataProjects from "../../data/projects.json";
import dataHobbies from '../../data/hobbies.json';
import dataExperiencies from '../../data/experiences.json';

export const OverallView = () => {

  const [projects, setProjects] = useState([]);
  const [projectWebside, setProjectWebside] = useState('all');

  const [hobbies, setHobbies] = useState([]);

  const [experiences, setExperiences] = useState([]);
  const [experienceType, setExperienceType] = useState('job');

  const handleProjectWebside = (webside) => {
    setProjectWebside(webside);
  };

  const handleExperienceType = (type) => {
    setExperienceType(type);
  };

  useEffect(() => {
    setProjects(() => {
      const filteredProjects = dataProjects.filter((project) => projectWebside === 'all' ? project.webside : project.webside === projectWebside);
      return filteredProjects;
    });
  }, [projectWebside]);

  useEffect(() => {
    setExperiences(() => {
      const filteredExperiences = dataExperiencies.filter((experience) => experience.type === experienceType);
      return filteredExperiences;
    });
  }, [experienceType]);

  useEffect(() => {
    setHobbies(dataHobbies);
  }, []);


  return (
    <>
      <div className="container-fluid">
      
        <div className="row flex-row pt-3 pb-2">
          <div className="d-flex d-sm-none col col-12 col-sm-5 col-md-4 col-lg-3 order-1">
            <AboutMe name={name} aboutme={aboutme} image={image} />
          </div>
          <div className="col col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 order-3">
            <div className="d-none d-sm-flex">
              <AboutMe name={name} aboutme={aboutme} image={image} />
            </div>
            <ExperiencesNavbar onChangeType={handleExperienceType} type={experienceType}/>
            <Experiences experiences={experiences} />
            <Hobbies hobbies={hobbies} />
          </div>
          <div className="col col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 order-2 order-sm-4">
            <Skills />
            <ProjectsNavbar onChangeWebside={handleProjectWebside} webside={projectWebside} />
            <Projects projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
};
