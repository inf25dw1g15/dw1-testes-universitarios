/**
 * The UtilizadoresControladorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UtilizadoresControladorService');
const utilizadoresCargoGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresCargoGET);
};

const utilizadoresCargoIdDisciplinasGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresCargoIdDisciplinasGET);
};

const utilizadoresEstudanteIdResultadosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresEstudanteIdResultadosGET);
};

const utilizadoresGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresGET);
};

const utilizadoresIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresIdDELETE);
};

const utilizadoresIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresIdGET);
};

const utilizadoresIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresIdPUT);
};

const utilizadoresPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.utilizadoresPOST);
};


<<<<<<< HEAD




=======
>>>>>>> ec03548fd7d7c6c15e8fe5621bf7530e7478be45
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
