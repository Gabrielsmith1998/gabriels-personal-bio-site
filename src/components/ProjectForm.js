import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
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
  projectName: '',
  projectDescription: '',
  projectImg: '',
  projectLink: '',
  deployedLink: '',
};

export default function ProjectForm({ user, obj }) {
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
    if (obj.firebaseKey) {
      getSingleProject(fbKey).then(() => {
        setFormInput(obj);
      });
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleImage = (e) => {
    setImageState(e.target.files[0]);
  };

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

  const repoLink = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      projectLink: e.target.value,
    }));
  };

  const deployedLink = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      deployedLink: e.target.value,
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
      uploadFile(
        imageState,
        `${user.uid}/projects/images/${new Date().getTime()}`,
      ).then((imageUrl) => {
        createProject({
          ...formInput,
          projectImg: imageUrl,
        })
          .then(() => {
            updateImages(allImages);
          })
          .then(() => {
            resetForm();
            history.push('/');
          });
      });
    }
  };

  return (
    <>
      {user?.isAdmin && (
        <div>
          <div>
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
          </div>
          <input
            onChange={handleImage}
            type="file"
            value={user.projectImg}
            accept="image/*"
          />
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
                placeholder="Link To Project Repo"
                name="link"
                value={formInput.projectLink}
                onChange={repoLink}
                required
              />
            </div>
            <div className="m-3">
              <input
                type="text"
                className="form-control"
                placeholder="Link To Deployed Site"
                name="link"
                value={formInput.deployedLink}
                onChange={deployedLink}
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
        </div>
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
