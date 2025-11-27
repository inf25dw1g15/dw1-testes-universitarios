const db = require("../db.js");

//
// GET /inscricoes
//
const inscricoesGET = async () => {
  const [rows] = await db.query("SELECT * FROM inscricoes");
  return rows;
};

//
// POST /inscricoes
//
const inscricoesPOST = async ({ body }) => {
  const { id_estudante, id_disciplina } = body;

  if (!id_estudante || !id_disciplina) {
    const err = new Error("Campos obrigatórios: id_estudante, id_disciplina");
    err.status = 400;
    throw err;
  }

  // validar se o utilizador existe e é Estudante
  const [user] = await db.query(
    "SELECT cargo FROM utilizadores WHERE id = ?",
    [id_estudante]
  );

  if (user.length === 0) {
    const err = new Error("O utilizador indicado não existe");
    err.status = 400;
    throw err;
  }

  if (user[0].cargo !== "Estudante") {
    const err = new Error("Apenas estudantes podem ser inscritos");
    err.status = 400;
    throw err;
  }

  // validar disciplina existe
  const [disc] = await db.query(
    "SELECT id FROM disciplinas WHERE id = ?",
    [id_disciplina]
  );

  if (disc.length === 0) {
    const err = new Error("A disciplina indicada não existe");
    err.status = 400;
    throw err;
  }

  // impedir duplicação de inscrições
  const [jaExiste] = await db.query(
    "SELECT * FROM inscricoes WHERE id_estudante = ? AND id_disciplina = ?",
    [id_estudante, id_disciplina]
  );

  if (jaExiste.length > 0) {
    const err = new Error("O estudante já está inscrito nesta disciplina");
    err.status = 400;
    throw err;
  }

  // criar inscrição
  const [result] = await db.query(
    "INSERT INTO inscricoes (id_estudante, id_disciplina) VALUES (?, ?)",
    [id_estudante, id_disciplina]
  );

  return {
    id: result.insertId,
    id_estudante,
    id_disciplina,
  };
};

//
// GET /inscricoes/{id}
//
const inscricoesIdGET = async ({ id }) => {
  const [rows] = await db.query(
    "SELECT * FROM inscricoes WHERE id = ?",
    [id]
  );

  if (rows.length === 0) {
    const err = new Error("Inscrição não encontrada");
    err.status = 404;
    throw err;
  }

  return rows[0];
};

//
// PUT /inscricoes/{id}
//
const inscricoesIdPUT = async ({ id, body }) => {
  const { id_estudante, id_disciplina } = body;

  if (!id_estudante || !id_disciplina) {
    const err = new Error("Campos obrigatórios: id_estudante, id_disciplina");
    err.status = 400;
    throw err;
  }

  // verificar se a inscrição existe antes de alterar
  const [existe] = await db.query(
    "SELECT * FROM inscricoes WHERE id = ?",
    [id]
  );

  if (existe.length === 0) {
    const err = new Error("Inscrição não encontrada");
    err.status = 404;
    throw err;
  }

  // validar estudante
  const [user] = await db.query(
    "SELECT cargo FROM utilizadores WHERE id = ?",
    [id_estudante]
  );

  if (user.length === 0) {
    const err = new Error("O utilizador indicado não existe");
    err.status = 400;
    throw err;
  }

  if (user[0].cargo !== "Estudante") {
    const err = new Error("Apenas estudantes podem ser inscritos");
    err.status = 400;
    throw err;
  }

  // validar disciplina
  const [disc] = await db.query(
    "SELECT id FROM disciplinas WHERE id = ?",
    [id_disciplina]
  );

  if (disc.length === 0) {
    const err = new Error("A disciplina indicada não existe");
    err.status = 400;
    throw err;
  }

  // impedir duplicação de inscrições (PUT não pode criar duplicados)
  const [jaExiste] = await db.query(
    `
      SELECT * FROM inscricoes 
      WHERE id_estudante = ? AND id_disciplina = ? AND id != ?
    `,
    [id_estudante, id_disciplina, id]
  );

  if (jaExiste.length > 0) {
    const err = new Error("O estudante já está inscrito nesta disciplina");
    err.status = 400;
    throw err;
  }

  // atualizar
  const [result] = await db.query(
    `
      UPDATE inscricoes
      SET id_estudante = ?, id_disciplina = ?
      WHERE id = ?
    `,
    [id_estudante, id_disciplina, id]
  );

  return {
    id,
    id_estudante,
    id_disciplina
  };
};

//
// DELETE /inscricoes/{id}
//
const inscricoesIdDELETE = async ({ id }) => {
  const [result] = await db.query(
    "DELETE FROM inscricoes WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    const err = new Error("Inscrição não encontrada");
    err.status = 404;
    throw err;
  }

  return { message: "Inscrição apagada com sucesso" };
};

//
// GET /disciplinas/{id}/inscricoes
//
const inscricoesPorDisciplinaGET = async ({ id }) => {
  const [rows] = await db.query(
    `
      SELECT i.*
      FROM inscricoes i
      JOIN disciplinas d ON d.id = i.id_disciplina
      WHERE d.id = ?
    `,
    [id]
  );

  return rows;
};

//
// GET /utilizadores/Estudante/{id}/inscricoes
//
const inscricoesPorEstudanteGET = async ({ id }) => {
  const [rows] = await db.query(
    `
      SELECT i.*
      FROM inscricoes i
      JOIN utilizadores u ON u.id = i.id_estudante
      WHERE u.id = ? AND u.cargo = 'Estudante'
    `,
    [id]
  );

  return rows;
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