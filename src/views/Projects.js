import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/data/bioData';
import Project from '../components/Projects';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((proj) => {
      if (isMounted) setProjects(proj);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <div>
      {projects ? (
        <>
          <h1 className="text-center">My Projects</h1>
          <div className="d-flex flex-wrap">
            {projects.map((obj) => (
              <Project
                key={obj.firebaseKey}
                obj={obj}
                setProjects={setProjects}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
