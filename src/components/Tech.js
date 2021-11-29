import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';

export default function Tech({ technolo }) {
  return (
    <div>
      <Container className="tech-card-container">
        <Card className="tech-cards">
          <img className="tech-img" src={technolo.techImg} alt="tech" />
          <p>{technolo.techName}</p>
          <p>{technolo.techDescription}</p>
        </Card>
      </Container>
    </div>
  );
}

Tech.propTypes = {
  technolo: PropTypes.shape(PropTypes.obj).isRequired,
};
