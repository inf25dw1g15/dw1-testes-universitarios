/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve all tests
*
* returns List
* */
const testesGET = () => new Promise(
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
* Delete a specific test
*
* id Long 
* no response value expected for this operation
* */
const testesIdDELETE = ({ id }) => new Promise(
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
* Retrieve a specific test
*
* id Long 
* returns Testes
* */
const testesIdGET = ({ id }) => new Promise(
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
* Update a specific test
*
* id Long 
* testes Testes 
* no response value expected for this operation
* */
const testesIdPUT = ({ id, testes }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        testes,
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
* Retrieve all results in specific test
*
* id Long 
* returns Resultados
* */
const testesIdResultadosGET = ({ id }) => new Promise(
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
* Create a Test
*
* testes Testes 
* no response value expected for this operation
* */
const testesPOST = ({ testes }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        testes,
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
  testesGET,
  testesIdDELETE,
  testesIdGET,
  testesIdPUT,
  testesIdResultadosGET,
  testesPOST,
};
