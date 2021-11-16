import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';

export default function Project({ project }) {
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
          <p>{project.projectName}</p>
          <p>{project.projectDescription}</p>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer noopener"
          >
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
      </Container>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape(PropTypes.obj).isRequired,
};
