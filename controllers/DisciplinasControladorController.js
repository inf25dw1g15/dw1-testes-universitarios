/**
 * The DisciplinasControladorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DisciplinasControladorService');
const disciplinasGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasGET);
};

const disciplinasIdAlunosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasIdAlunosGET);
};

const disciplinasIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasIdDELETE);
};

const disciplinasIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasIdGET);
};

const disciplinasIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasIdPUT);
};

const disciplinasIdTestesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasIdTestesGET);
};

const disciplinasPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.disciplinasPOST);
};



module.exports = {
  disciplinasGET,
  disciplinasIdAlunosGET,
  disciplinasIdDELETE,
  disciplinasIdGET,
  disciplinasIdPUT,
  disciplinasIdTestesGET,
  disciplinasPOST,

};
