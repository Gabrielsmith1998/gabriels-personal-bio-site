import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import {
  createTech,
  getProjects,
  getSingleTech,
  updateTech,
} from '../api/data/bioData';

const uploadFile = (file, locationPath = '/') => new Promise((resolve, reject) => {
  const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child(`${locationPath}`).put(file);

  uploadTask.on('state_changed', {
    error: reject,
    complete: () => {
      uploadTask.snapshot.ref.getDownloadURL().then(resolve);
    },
  });
});

const initialState = {
  techName: '',
  techDescription: '',
  techImg: '',
};

export default function TechForm({ user, technolo }) {
  const [allImages, setAllImages] = useState([]);
  const [imageState, setImageState] = useState(null);
  const [formInput, setFormInput] = useState(initialState);
  const { fbKey } = useParams();
  const history = useHistory();

  const updateImages = () => {
    getProjects().then((images) => {
      setAllImages(images);
    });
  };

  useEffect(() => {
    if (technolo.firebaseKey) {
      getSingleTech(fbKey).then(() => {
        setFormInput(technolo);
      });
    } else {
      setFormInput(initialState);
    }
  }, [technolo]);

  const handleImage = (e) => {
    setImageState(e.target.files[0]);
  };

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
    if (fbKey) {
      updateTech(formInput).then(() => {
        resetForm();
        history.push('/editTech');
      });
    } else {
      uploadFile(imageState, `${user.uid}/tech/images/${new Date().getTime()}`)
        .then((imageUrl) => {
          createTech({
            ...formInput,
            techImg: imageUrl,
          });
        })
        .then(() => {
          updateImages(allImages);
        })
        .then(() => {
          resetForm();
          history.push('/');
        });
    }
  };

  return (
    <>
      {user?.isAdmin && (
        <form onSubmit={handleSubmit}>
          <img
            className="create-project-image"
            src={
              imageState
                ? URL.createObjectURL(imageState)
                : formInput.projectImg
                  || 'https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png'
            }
            onChange={handleImage}
            alt="new"
          />
          <input
            onChange={handleImage}
            type="file"
            value={user.techImg}
            accept="image/*"
          />
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
  user: PropTypes.shape(PropTypes.obj),
  technolo: PropTypes.shape(PropTypes.obj),
};

TechForm.defaultProps = {
  user: null,
  technolo: {},
};
