import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { getTech } from '../api/data/bioData';
import Tech from '../components/Tech';

export default function Technologies() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTech().then((proj) => {
      if (isMounted) setTech(proj);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {tech ? (
        <>
          <Container className="tech-card-container">
            <h1 className="text-center">My Tech</h1>
            <div className="d-flex flex-wrap">
              {tech.map((technolo) => (
                <Tech
                  key={technolo.firebaseKey}
                  technolo={technolo}
                  setTech={setTech}
                />
              ))}
            </div>
          </Container>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
