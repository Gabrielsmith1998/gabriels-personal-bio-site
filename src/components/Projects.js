import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

export default function Project({ obj }) {
  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails(!details);
  };
  return (
    <div className="project-card-container">
      <Card className="project-cards">
        <img
          src={obj.projectImg}
          alt="github project"
          className="project-img"
        />
        <p>{obj.projectName}</p>
        <p>{obj.projectDescription}</p>
        <button type="button" className="btn btn-info" onClick={toggleDetails}>
          Project Details
        </button>
        {details && (
          <div>
            <div className="details">
              <a
                href={obj.projectLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                Repo
              </a>
              <br />
              <a
                href={obj.deployedLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                Deployed Site
              </a>
              <br />
              <button
                className="btn btn-danger"
                onClick={toggleDetails}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

Project.propTypes = {
  obj: PropTypes.shape(PropTypes.obj).isRequired,
};
