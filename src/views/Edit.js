import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EditProject from '../components/EditProjects';
import { getProjects } from '../api/data/bioData';

export default function Edit({ user }) {
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
      {user?.isAdmin && (
        <div className="form-container">
          {projects ? (
            <>
              <h1 className="tech-n-projects">My Projects</h1>
              <div className="d-flex flex-wrap">
                {projects.map((project) => (
                  <EditProject
                    key={project.firebaseKey}
                    project={project}
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

Edit.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Edit.defaultProps = {
  user: null,
};
