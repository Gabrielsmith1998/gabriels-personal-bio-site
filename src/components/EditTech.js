import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';

export default function EditTech({ technolo }) {
  return (
    <div>
      <Container className="project-card-container">
        <Card className="project-cards">
          <p>{technolo.techName}</p>
          <p>{technolo.techDescription}</p>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </Card>
      </Container>
    </div>
  );
}

EditTech.propTypes = {
  technolo: PropTypes.shape(PropTypes.obj).isRequired,
};
