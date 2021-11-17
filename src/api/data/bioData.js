import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(resolve);
    })
    .catch(reject);
});

const getSingleProject = (fbKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects/${fbKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateProject = (updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/projects/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const deleteProject = (fbKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/projects/${fbKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const getTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/tech.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch(reject);
});

const createTech = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/tech.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/tech/${firebaseKey}.json`, { firebaseKey })
        .then(resolve);
    })
    .catch(reject);
});

const getSingleTech = (fbKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/tech/${fbKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateTech = (updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/tech/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getTech().then(resolve))
    .catch(reject);
});

const deleteTech = (fbKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/tech/${fbKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

export {
  getProjects,
  createProject,
  createTech,
  getTech,
  getSingleProject,
  updateProject,
  deleteProject,
  getSingleTech,
  updateTech,
  deleteTech,
};
