import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';

export default function Create({ user }) {
  return (
    <div>
      <ProjectForm user={user} />
    </div>
  );
}

Create.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Create.defaultProps = {
  user: null,
};
