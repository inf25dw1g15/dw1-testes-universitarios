const Controller = require('./Controller');
const service = require('../services/InscricoesControladorService');

//
// GET /inscricoes
//
const inscricoesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesGET);
};

//
// POST /inscricoes
//
const inscricoesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesPOST);
};

//
// GET /inscricoes/{id}
//
const inscricoesIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesIdGET);
};

//
// PUT /inscricoes/{id}
//
const inscricoesIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesIdPUT);
};

//
// DELETE /inscricoes/{id}
//
const inscricoesIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesIdDELETE);
};

//
// GET /disciplinas/{id}/inscricoes
// Obter todas as inscrições de uma disciplina
//
const inscricoesPorDisciplinaGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesPorDisciplinaGET);
};

//
// GET /utilizadores/Estudante/{id}/inscricoes
// Obter todas as inscrições de um estudante
//
const inscricoesPorEstudanteGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inscricoesPorEstudanteGET);
};

module.exports = {
  inscricoesGET,
  inscricoesPOST,
  inscricoesIdGET,
  inscricoesIdPUT,
  inscricoesIdDELETE,
  inscricoesPorDisciplinaGET,
  inscricoesPorEstudanteGET
};