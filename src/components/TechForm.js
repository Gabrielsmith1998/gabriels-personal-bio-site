import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createTech } from '../api/data/bioData';

const initialState = {
  techName: '',
  techDescription: '',
  techImg: '',
};

export default function TechForm({ TechObj, user }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (TechObj.firebaseKey) {
      setFormInput(TechObj);
    } else {
      setFormInput(initialState);
    }
  }, [TechObj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      techName: e.target.value,
    }));
  };

  const handleDescription = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      techDescription: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTech(formInput).then(() => {
      resetForm();
      history.push('/');
    });
  };

  return (
    <>
      {user?.isAdmin && (
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Tech Name"
              value={formInput.techName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Tech Description"
              name="description"
              value={formInput.techDescription}
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

TechForm.propTypes = {
  TechObj: PropTypes.shape(PropTypes.obj),
  user: PropTypes.shape(PropTypes.obj),
};

TechForm.defaultProps = {
  TechObj: {},
  user: null,
};
