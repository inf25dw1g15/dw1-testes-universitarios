/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve all subjects
*
* returns List
* */
const disciplinasGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List all students subscribed in subject
*
* id Long 
* returns Utilizadores
* */
const disciplinasIdAlunosGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a specific subject
*
* id Long 
* no response value expected for this operation
* */
const disciplinasIdDELETE = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Retrieve a specific subject
*
* id Long 
* returns Disciplinas
* */
const disciplinasIdGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a specific subject
*
* id Long 
* disciplinas Disciplinas 
* no response value expected for this operation
* */
const disciplinasIdPUT = ({ id, disciplinas }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        disciplinas,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List all tests subscribed in subject
*
* id Long 
* returns Testes
* */
const disciplinasIdTestesGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a Subject
*
* disciplinas Disciplinas 
* no response value expected for this operation
* */
const disciplinasPOST = ({ disciplinas }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        disciplinas,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  disciplinasGET,
  disciplinasIdAlunosGET,
  disciplinasIdDELETE,
  disciplinasIdGET,
  disciplinasIdPUT,
  disciplinasIdTestesGET,
  disciplinasPOST,
};
