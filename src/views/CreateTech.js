import React from 'react';
import PropTypes from 'prop-types';
import TechForm from '../components/TechForm';

export default function CreateTech({ user }) {
  return (
    <div>
      <TechForm user={user} />
    </div>
  );
}

CreateTech.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

CreateTech.defaultProps = {
  user: null,
};
