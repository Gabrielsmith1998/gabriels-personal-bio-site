import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';

export default function Project({ obj }) {
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
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
      </Container>
    </div>
  );
}

Project.propTypes = {
  obj: PropTypes.shape(PropTypes.obj).isRequired,
};
