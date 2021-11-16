import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function EditProject({ project }) {
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
          <p>{project.projectName}</p>
          <p>{project.projectDescription}</p>
          <Link className="nav-link active" to="/repo">
            Repo
          </Link>
          <Link className="nav-link active" to="/deployedSite">
            Deployed Site
          </Link>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </Card>
      </Container>
    </div>
  );
}

EditProject.propTypes = {
  project: PropTypes.shape(PropTypes.obj).isRequired,
};
