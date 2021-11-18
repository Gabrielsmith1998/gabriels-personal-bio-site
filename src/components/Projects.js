import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

export default function Project({ obj }) {
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
        <a href={obj.projectLink} target="_blank" rel="noreferrer noopener">
          Repo
        </a>
        <a
          href="https://twitter.com/saigowthamr/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Deployed Site
        </a>
      </Card>
    </div>
  );
}

Project.propTypes = {
  obj: PropTypes.shape(PropTypes.obj).isRequired,
};
