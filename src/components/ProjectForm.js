import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  createProject,
  getSingleProject,
  updateProject,
} from '../api/data/bioData';

const initialState = {
  projectName: '',
  projectDescription: '',
  projectImg: '',
  projectLink: '',
};

export default function ProjectForm({ user, obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      getSingleProject(fbKey).then(() => {
        setFormInput(obj);
      });
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      projectName: e.target.value,
    }));
  };

  const handleDescription = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      projectDescription: e.target.value,
    }));
  };

  const handleLink = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      projectLink: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      updateProject(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createProject(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      {user?.isAdmin && (
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Project Name"
              name="title"
              value={formInput.projectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Link To Project"
              name="link"
              value={formInput.projectLink}
              onChange={handleLink}
              required
            />
          </div>
          <div className="m-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              placeholder="Project Description"
              value={formInput.projectDescription}
              onChange={handleDescription}
              required
            />
          </div>
          <div className="m-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

ProjectForm.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  obj: PropTypes.shape(PropTypes.obj),
};

ProjectForm.defaultProps = {
  user: null,
  obj: {},
};
