import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteTech } from '../api/data/bioData';

export default function EditTech({ technolo, setTech }) {
  const handleDelete = () => {
    deleteTech(technolo.firebaseKey).then((proj) => setTech(proj));
  };
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
          <p>{technolo.techName}</p>
          <p>{technolo.techDescription}</p>
          <Link
            to={`/editTech/${technolo.firebaseKey}`}
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

EditTech.propTypes = {
  technolo: PropTypes.shape(PropTypes.obj).isRequired,
  setTech: PropTypes.func.isRequired,
};
