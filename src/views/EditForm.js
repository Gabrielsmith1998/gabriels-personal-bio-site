import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import { getSingleProject } from '../api/data/bioData';

export default function EditForm({ user }) {
  const { fbKey } = useParams();
  const [editProject, setEditProject] = useState({});

  useEffect(() => {
    getSingleProject(fbKey).then(setEditProject);
  }, []);
  return (
    <>
      <h1 className="page-header">{fbKey}</h1>
      <div className="form-container">
        <ProjectForm obj={editProject} user={user} />
      </div>
    </>
  );
}

EditForm.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

EditForm.defaultProps = {
  user: null,
};
