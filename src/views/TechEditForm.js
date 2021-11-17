import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleTech } from '../api/data/bioData';
import TechForm from '../components/TechForm';

export default function TechEditForm({ user }) {
  const { fbKey } = useParams();
  const [editTech, setEditTech] = useState({});

  useEffect(() => {
    getSingleTech(fbKey).then(setEditTech);
  }, []);
  return (
    <>
      <h1 className="page-header">Edit Stuff</h1>
      <div className="form-container">
        <TechForm technolo={editTech} user={user} />
      </div>
    </>
  );
}

TechEditForm.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

TechEditForm.defaultProps = {
  user: null,
};
