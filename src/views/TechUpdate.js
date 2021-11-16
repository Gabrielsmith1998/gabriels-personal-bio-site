import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTech } from '../api/data/bioData';
import EditTech from '../components/EditTech';

export default function TechUpdate({ user }) {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTech().then((tec) => {
      if (isMounted) setTech(tec);
    });
    return () => {
      isMounted = false;
    };
  });
  return (
    <div>
      {user?.isAdmin && (
        <div className="form-container">
          {tech ? (
            <>
              <h1 className="tech-n-projects">My Tech</h1>
              <div className="d-flex flex-wrap">
                {tech.map((technolo) => (
                  <EditTech
                    key={technolo.firebaseKey}
                    technolo={technolo}
                    user={user}
                  />
                ))}
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

TechUpdate.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

TechUpdate.defaultProps = {
  user: null,
};
