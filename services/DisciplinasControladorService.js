<<<<<<< HEAD
const db = require("../db.js");

/**
 * GET /disciplinas
 */
const disciplinasGET = async () => {
  const [rows] = await db.query("SELECT * FROM disciplinas");
  return rows;
};

/**
 * POST /disciplinas
 */
const disciplinasPOST = async ({ body }) => {
  const { nome, numero_horas, id_professor, criado_em } = body || {};

  if (!nome || !numero_horas || !id_professor) {
    const err = new Error("Campos obrigatórios em falta: nome, numero_horas, id_professor");
    err.status = 400;
    throw err;
  }

  // validar duplicação do nome
  const [duplicado] = await db.query(
    "SELECT * FROM disciplinas WHERE nome = ?",
    [nome]
  );

  if (duplicado.length > 0) {
    const err = new Error("Já existe uma disciplina com este nome.");
    err.status = 409;
    throw err;
  }

  // validar professor
  const [prof] = await db.query(
    "SELECT * FROM utilizadores WHERE id = ? AND cargo = 'Professor'",
    [id_professor]
  );

  if (prof.length === 0) {
    const err = new Error("O professor indicado não existe ou não é Professor.");
    err.status = 400;
    throw err;
  }

  const dataCriacao = criado_em || new Date().toISOString().split("T")[0];

  const [result] = await db.query(
    "INSERT INTO disciplinas (nome, numero_horas, id_professor, criado_em) VALUES (?, ?, ?, ?)",
    [nome, numero_horas, id_professor, dataCriacao]
  );

  return {
    id: result.insertId,
    nome,
    numero_horas,
    id_professor,
    criado_em: dataCriacao
  };
};

/**
 * GET /disciplinas/{id}
 */
const disciplinasIdGET = async ({ id }) => {
  const [rows] = await db.query("SELECT * FROM disciplinas WHERE id = ?", [id]);

  if (rows.length === 0) {
    const err = new Error("Disciplina não encontrada");
    err.status = 404;
    throw err;
  }

  return rows[0];
};

/**
 * PUT /disciplinas/{id}
 */
const disciplinasIdPUT = async ({ id, body }) => {
  const { nome, numero_horas, id_professor, criado_em } = body || {};

  if (!nome || !numero_horas || !id_professor) {
    const err = new Error("Campos obrigatórios em falta: nome, numero_horas, id_professor");
    err.status = 400;
    throw err;
  }

  // validar se disciplina existe
  const [existe] = await db.query(
    "SELECT * FROM disciplinas WHERE id = ?",
    [id]
  );

  if (existe.length === 0) {
    const err = new Error("Disciplina não encontrada");
    err.status = 404;
    throw err;
  }

  // validar duplicação de nome em outra disciplina
  const [duplicado] = await db.query(
    "SELECT * FROM disciplinas WHERE nome = ? AND id != ?",
    [nome, id]
  );

  if (duplicado.length > 0) {
    const err = new Error("Já existe outra disciplina com este nome.");
    err.status = 409;
    throw err;
  }

  // validar professor
  const [prof] = await db.query(
    "SELECT * FROM utilizadores WHERE id = ? AND cargo = 'Professor'",
    [id_professor]
  );

  if (prof.length === 0) {
    const err = new Error("O professor indicado não existe ou não é Professor.");
    err.status = 400;
    throw err;
  }

  const dataCriacao = criado_em || new Date().toISOString().split("T")[0];

  const [result] = await db.query(
    "UPDATE disciplinas SET nome = ?, numero_horas = ?, id_professor = ?, criado_em = ? WHERE id = ?",
    [nome, numero_horas, id_professor, dataCriacao, id]
  );

  return {
    id,
    nome,
    numero_horas,
    id_professor,
    criado_em: dataCriacao
  };
};

/**
 * DELETE /disciplinas/{id}
 */
const disciplinasIdDELETE = async ({ id }) => {

  // disciplinas não podem ser apagadas se tiverem testes
  const [testes] = await db.query(
    "SELECT * FROM testes WHERE id_disciplina = ?",
    [id]
  );

  if (testes.length > 0) {
    const err = new Error("Esta disciplina contém testes associados e não pode ser apagada.");
    err.status = 409;
    throw err;
  }

  // disciplinas não podem ter inscrições
  const [inscr] = await db.query(
    "SELECT * FROM inscricoes WHERE id_disciplina = ?",
    [id]
  );

  if (inscr.length > 0) {
    const err = new Error("Existem estudantes inscritos nesta disciplina. Remova as inscrições primeiro.");
    err.status = 409;
    throw err;
  }

  // apagar disciplina
  const [result] = await db.query(
    "DELETE FROM disciplinas WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    const err = new Error("Disciplina não encontrada");
    err.status = 404;
    throw err;
  }

  return { message: "Disciplina apagada com sucesso" };
};

/**
 * GET /disciplinas/{id}/alunos
 */
const disciplinasIdAlunosGET = async ({ id }) => {
  const [rows] = await db.query(
    `
      SELECT u.*
      FROM utilizadores u
      JOIN inscricoes i ON u.id = i.id_estudante
      WHERE i.id_disciplina = ?
    `,
    [id]
  );
  return rows;
};

/**
 * GET /disciplinas/{id}/testes
 */
const disciplinasIdTestesGET = async ({ id }) => {
  const [rows] = await db.query(
    "SELECT * FROM testes WHERE id_disciplina = ?",
    [id]
  );
  return rows;
};

module.exports = {
  disciplinasGET,
  disciplinasPOST,
  disciplinasIdGET,
  disciplinasIdPUT,
  disciplinasIdDELETE,
  disciplinasIdAlunosGET,
  disciplinasIdTestesGET
}; 
=======
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
>>>>>>> ec03548fd7d7c6c15e8fe5621bf7530e7478be45
