import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Project from '../components/Projects';

export default function Contact() {
  const [projects, setProjects] = useState([]);
  return (
    <>
      <Carousel>
        {projects.map((obj) => (
          <Project key={obj.firebaseKey} obj={obj} setProjects={setProjects} />
        ))}
      </Carousel>
    </>
  );
}
