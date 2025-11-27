
const db = require("../db.js");

//
// GET /utilizadores
//
const utilizadoresGET = async () => {
  const [rows] = await db.query("SELECT * FROM utilizadores");
  return rows;
};

//
// POST /utilizadores
//
const utilizadoresPOST = async ({ body }) => {
  const { nome, email, cargo, criado_em } = body;

  if (!nome || !email || !cargo) {
    const err = new Error("Campos obrigatórios: nome, email, cargo");
    err.status = 400;
    throw err;
  }

  const dataCriacao = criado_em || new Date().toISOString().split("T")[0];

  const [result] = await db.query(
    "INSERT INTO utilizadores (nome, email, cargo, criado_em) VALUES (?, ?, ?, ?)",
    [nome, email, cargo, dataCriacao]
  );

  return {
    id: result.insertId,
    nome,
    email,
    cargo,
    criado_em: dataCriacao,
  };
};

//
// GET /utilizadores/{id}
//
const utilizadoresIdGET = async ({ id }) => {
  const [rows] = await db.query(
    "SELECT * FROM utilizadores WHERE id = ?",
    [id]
  );

  if (rows.length === 0) {
    const err = new Error("Utilizador não encontrado");
    err.status = 404;
    throw err;
  }

  return rows[0];
};

//
// PUT /utilizadores/{id}
//
const utilizadoresIdPUT = async ({ id, body }) => {
  const { nome, email, cargo, criado_em } = body;

  if (!nome || !email || !cargo) {
    const err = new Error("Campos obrigatórios: nome, email, cargo");
    err.status = 400;
    throw err;
  }

  const dataCriacao = criado_em || new Date().toISOString().split("T")[0];

  const [result] = await db.query(
    "UPDATE utilizadores SET nome = ?, email = ?, cargo = ?, criado_em = ? WHERE id = ?",
    [nome, email, cargo, dataCriacao, id]
  );

  if (result.affectedRows === 0) {
    const err = new Error("Utilizador não encontrado");
    err.status = 404;
    throw err;
  }

  return {
    id,
    nome,
    email,
    cargo,
    criado_em: dataCriacao,
  };
};

//
// DELETE /utilizadores/{id}
//
const utilizadoresIdDELETE = async ({ id }) => {

  // impedir apagar utilizador com inscrições
  const [inscr] = await db.query(
    "SELECT * FROM inscricoes WHERE id_estudante = ?",
    [id]
  );

  if (inscr.length > 0) {
    const err = new Error("Não é possível apagar: o utilizador tem inscrições associadas");
    err.status = 400;
    throw err;
  }

  // impedir apagar utilizador com resultados
  const [res] = await db.query(
    "SELECT * FROM resultados WHERE id_estudante = ?",
    [id]
  );

  if (res.length > 0) {
    const err = new Error("Não é possível apagar: o utilizador tem resultados associados");
    err.status = 400;
    throw err;
  }

  // impedir apagar professor com disciplinas atribuídas
  const [profDisc] = await db.query(
    "SELECT * FROM disciplinas WHERE id_professor = ?",
    [id]
  );

  if (profDisc.length > 0) {

    // impedir apagar professor se existir teste ligado às disciplinas dele
    const [testes] = await db.query(
      `SELECT t.*
       FROM testes t
       JOIN disciplinas d ON d.id = t.id_disciplina
       WHERE d.id_professor = ?`,
      [id]
    );

    if (testes.length > 0) {
      const err = new Error("Não é possível apagar: o professor tem testes associados às suas disciplinas");
      err.status = 400;
      throw err;
    }

    const err = new Error("Não é possível apagar: o professor tem disciplinas associadas");
    err.status = 400;
    throw err;
  }

  // apagar utilizador
  const [result] = await db.query(
    "DELETE FROM utilizadores WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    const err = new Error("Utilizador não encontrado");
    err.status = 404;
    throw err;
  }

  return { message: "Utilizador apagado com sucesso" };
};

//
// GET /utilizadores/{cargo}
//
const utilizadoresCargoGET = async ({ cargo }) => {
  const [rows] = await db.query(
    "SELECT * FROM utilizadores WHERE cargo = ?",
    [cargo]
  );

  return rows;
};

//
// GET /utilizadores/{cargo}/{id}/disciplinas
//
const utilizadoresCargoIdDisciplinasGET = async ({ cargo, id }) => {
  let query;
  let params;

  if (cargo === "Estudante") {
    query = `
      SELECT d.*
      FROM disciplinas d
      JOIN inscricoes i ON d.id = i.id_disciplina
      WHERE i.id_estudante = ?
    `;
    params = [id];
  } else if (cargo === "Professor") {
    query = `
      SELECT d.*
      FROM disciplinas d
      WHERE d.id_professor = ?
    `;
    params = [id];
  } else {
    return [];
  }

  const [rows] = await db.query(query, params);
  return rows;
};

//
// GET /utilizadores/Estudante/{id}/resultados
//
const utilizadoresEstudanteIdResultadosGET = async ({ id }) => {
  const [rows] = await db.query(
    `
      SELECT r.*
      FROM resultados r
      JOIN utilizadores u ON u.id = r.id_estudante
      WHERE u.id = ? AND u.cargo = 'Estudante'
    `,
    [id]
  );

  return rows;
};

module.exports = {
  utilizadoresGET,
  utilizadoresPOST,
  utilizadoresIdGET,
  utilizadoresIdPUT,
  utilizadoresIdDELETE,
  utilizadoresCargoGET,
  utilizadoresCargoIdDisciplinasGET,
  utilizadoresEstudanteIdResultadosGET,
};
