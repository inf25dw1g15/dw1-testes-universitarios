/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve all users with specific roles.
*
* cargo String 
* returns List
* */
const utilizadoresCargoGET = ({ cargo }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        cargo,
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
* Retrieve all the subjects where each user is subscribed
*
* cargo String 
* id Long 
* returns List
* */
const utilizadoresCargoIdDisciplinasGET = ({ cargo, id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        cargo,
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
* Retrieve all results
*
* id Long 
* returns List
* */
const utilizadoresEstudanteIdResultadosGET = ({ id }) => new Promise(
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
* Retriveve all users.
*
* returns List
* */
const utilizadoresGET = () => new Promise(
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
* Delete a specific User
*
* id Long 
* no response value expected for this operation
* */
const utilizadoresIdDELETE = ({ id }) => new Promise(
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
* Retrieve a specific user
*
* id Long 
* returns Utilizadores
* */
const utilizadoresIdGET = ({ id }) => new Promise(
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
* Update a specific user
*
* id Long 
* utilizadores Utilizadores 
* no response value expected for this operation
* */
const utilizadoresIdPUT = ({ id, utilizadores }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        utilizadores,
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
* Create one utilizador
*
* utilizadores Utilizadores 
* no response value expected for this operation
* */
const utilizadoresPOST = ({ utilizadores }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        utilizadores,
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
  utilizadoresCargoGET,
  utilizadoresCargoIdDisciplinasGET,
  utilizadoresEstudanteIdResultadosGET,
  utilizadoresGET,
  utilizadoresIdDELETE,
  utilizadoresIdGET,
  utilizadoresIdPUT,
  utilizadoresPOST,
};
