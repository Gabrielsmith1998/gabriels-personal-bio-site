import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
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
  }, []);

  useEffect(() => {
    let isMounted = true;
    getTech().then((technolo) => {
      if (isMounted) setTech(technolo);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
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
          src="https://i.imgur.com/7ikA0eJ.png"
          alt="Gabriel Smith"
          className="img-fluid"
        />
      </div>
      <div className="tech-n-projects">
        {projects ? (
          <>
            <div
              className="tech-n-projects"
              style={{ transform: `translateY(${offsetY * 0.15}px)` }}
            >
              <h1 className="project-header">
                My <br />
                Projects
              </h1>
              <img
                className="gabrielHoney"
                src="https://i.imgur.com/8ezrnUI.jpg"
                alt="Gabriel Smith"
              />
              <Carousel className="project-carousel">
                {projects.map((obj) => (
                  <Project
                    key={obj.firebaseKey}
                    obj={obj}
                    setProjects={setProjects}
                  />
                ))}
              </Carousel>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className="teched">
        {tech ? (
          <>
            <div
              style={{ transform: `translateY(${offsetY * 0.15}px)` }}
              className="teched"
            >
              <h1 className="tech-header">
                My <br />
                Tech
              </h1>
              <Carousel className="Carousel">
                {tech.map((technolo) => (
                  <Tech
                    key={technolo.firebaseKey}
                    technolo={technolo}
                    setProjects={setProjects}
                  />
                ))}
              </Carousel>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
