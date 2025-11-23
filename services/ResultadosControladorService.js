/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve all results
*
* returns List
* */
const resultadosGET = () => new Promise(
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
* Delete a specific result
*
* id Long 
* no response value expected for this operation
* */
const resultadosIdDELETE = ({ id }) => new Promise(
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
* Retrieve a specific result
*
* id Long 
* returns Resultados
* */
const resultadosIdGET = ({ id }) => new Promise(
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
* Update a specific result
*
* id Long 
* resultados Resultados 
* no response value expected for this operation
* */
const resultadosIdPUT = ({ id, resultados }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        resultados,
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
* Create a Result
*
* resultados Resultados 
* no response value expected for this operation
* */
const resultadosPOST = ({ resultados }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        resultados,
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
  resultadosGET,
  resultadosIdDELETE,
  resultadosIdGET,
  resultadosIdPUT,
  resultadosPOST,
};
