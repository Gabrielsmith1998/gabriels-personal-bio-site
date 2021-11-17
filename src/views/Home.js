import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProjects, getTech } from '../api/data/bioData';
import Project from '../components/Projects';
import Tech from '../components/Tech';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [tech, setTech] = useState([]);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="about-me">
        <p className="bio">
          About Me <br />
          <small>Gabriel Smith. 23.</small> <br />
          <small>Born in Nashville, TN.</small> <br />
          <small>Go Buckeyes. Go Braves. Go Titans.</small> <br />
          <small>Attented The Recording Connection in Nashville.</small> <br />
          <small>
            Passionate about web development and music production.
          </small>{' '}
          <br />
          <small>NSS student. Cohort E16.</small> <br />
          <small>Team player who thrives in a team environment.</small> <br />
        </p>
        <img
          src="https://i.ibb.co/txDYmVD/IMG-8799.png"
          alt="Gabriel Smith"
          className="img-fluid"
        />
      </div>
      <div>
        {projects ? (
          <>
            <div
              className="tech-n-shi"
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <h1>My Projects</h1>
              <div className="d-flex flex-wrap">
                {projects.map((obj) => (
                  <Project
                    key={obj.firebaseKey}
                    obj={obj}
                    setProjects={setProjects}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        {tech ? (
          <>
            <div style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
              <h1>My Tech</h1>
              <div className="d-flex flex-wrap">
                {tech.map((technolo) => (
                  <Tech key={technolo.firebaseKey} technolo={technolo} />
                ))}
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
