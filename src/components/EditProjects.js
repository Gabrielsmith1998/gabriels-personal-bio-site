import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteProject } from '../api/data/bioData';

export default function EditProject({ obj, setProjects }) {
  const handleDelete = () => {
    deleteProject(obj.firebaseKey).then((proj) => setProjects(proj));
  };
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
          <p>{obj.projectName}</p>
          <p>{obj.projectDescription}</p>
          <Link className="nav-link active" to="/repo">
            Repo
          </Link>
          <Link className="nav-link active" to="/deployedSite">
            Deployed Site
          </Link>
          <Link
            to={`/editProject/${obj.firebaseKey}`}
            className="btn btn-success"
          >
            <i className="far fa-edit" /> Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-danger"
            type="button"
          >
            Delete
          </button>
        </Card>
      </Container>
    </div>
  );
}

EditProject.propTypes = {
  obj: PropTypes.shape(PropTypes.obj).isRequired,
  setProjects: PropTypes.func.isRequired,
};
