/**
 * The TestesControladorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestesControladorService');
const testesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesGET);
};

const testesIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesIdDELETE);
};

const testesIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesIdGET);
};

const testesIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesIdPUT);
};

const testesIdResultadosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesIdResultadosGET);
};

const testesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.testesPOST);
};


module.exports = {
  testesGET,
  testesIdDELETE,
  testesIdGET,
  testesIdPUT,
  testesIdResultadosGET,
  testesPOST,
};
