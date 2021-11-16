import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getProjects, getTech } from '../api/data/bioData';
import Project from '../components/Projects';
import Tech from '../components/Tech';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((proj) => {
      if (isMounted) setProjects(proj);
    });
    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    let isMounted = true;
    getTech().then((technolo) => {
      if (isMounted) setTech(technolo);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="tech-n-projects">
      <figure className="position-relative">
        <img
          src="https://i.ibb.co/txDYmVD/IMG-8799.png"
          alt="Gabriel Smith"
          className="img-fluid"
        />
        <figcaption>About Me</figcaption>
      </figure>
      {projects ? (
        <>
          <h1 className="text-center">My Projects</h1>
          <div className="d-flex flex-wrap">
            {projects.map((project) => (
              <Project key={project.firebaseKey} project={project} />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
      {tech ? (
        <>
          <h1 className="text-center">My Tech</h1>
          <div className="d-flex flex-wrap">
            {tech.map((technolo) => (
              <Tech key={technolo.firebaseKey} technolo={technolo} />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
