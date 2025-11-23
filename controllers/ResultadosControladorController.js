/**
 * The ResultadosControladorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResultadosControladorService');
const resultadosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.resultadosGET);
};

const resultadosIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.resultadosIdDELETE);
};

const resultadosIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.resultadosIdGET);
};

const resultadosIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.resultadosIdPUT);
};

const resultadosPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.resultadosPOST);
};


module.exports = {
  resultadosGET,
  resultadosIdDELETE,
  resultadosIdGET,
  resultadosIdPUT,
  resultadosPOST,
};
