const db = require("../db.js");

/**
 * GET /resultados
 */
const resultadosGET = async () => {
  const [rows] = await db.query("SELECT * FROM resultados");
  return rows;
};

/**
 * POST /resultados
 */
const resultadosPOST = async ({ body }) => {
  const { nota, id_estudante, id_teste } = body || {};

  if (nota === undefined || !id_estudante || !id_teste) {
    const error = new Error("Campos obrigatórios: nota, id_estudante, id_teste");
    error.status = 400;
    throw error;
  }

  if (nota < 0 || nota > 20) {
    const error = new Error("A nota deve estar entre 0 e 20");
    error.status = 400;
    throw error;
  }

  // validar estudante
  const [user] = await db.query(
    "SELECT cargo FROM utilizadores WHERE id = ?",
    [id_estudante]
  );

  if (user.length === 0) {
    const error = new Error("O estudante indicado não existe");
    error.status = 400;
    throw error;
  }

  if (user[0].cargo !== "Estudante") {
    const error = new Error("Apenas estudantes podem ter resultados");
    error.status = 400;
    throw error;
  }

  // validar teste existe
  const [teste] = await db.query(
    "SELECT id_disciplina FROM testes WHERE id = ?",
    [id_teste]
  );

  if (teste.length === 0) {
    const error = new Error("O teste indicado não existe");
    error.status = 400;
    throw error;
  }

  const idDisciplina = teste[0].id_disciplina;

  // validar inscrição
  const [inscricao] = await db.query(
    "SELECT * FROM inscricoes WHERE id_estudante = ? AND id_disciplina = ?",
    [id_estudante, idDisciplina]
  );

  if (inscricao.length === 0) {
    const error = new Error(
      "O estudante não está inscrito na disciplina deste teste"
    );
    error.status = 400;
    throw error;
  }

  const [result] = await db.query(
    "INSERT INTO resultados (nota, id_estudante, id_teste) VALUES (?, ?, ?)",
    [nota, id_estudante, id_teste]
  );

  return {
    id: result.insertId,
    nota,
    id_estudante,
    id_teste
  };
};

/**
 * GET /resultados/{id}
 */
const resultadosIdGET = async ({ id }) => {
  const [rows] = await db.query("SELECT * FROM resultados WHERE id = ?", [id]);

  if (rows.length === 0) {
    const error = new Error("Resultado não encontrado");
    error.status = 404;
    throw error;
  }

  return rows[0];
};

/**
 * PUT /resultados/{id}
 */
const resultadosIdPUT = async ({ id, body }) => {
  const { nota, id_estudante, id_teste } = body || {};

  if (nota === undefined || !id_estudante || !id_teste) {
    const error = new Error("Campos obrigatórios: nota, id_estudante, id_teste");
    error.status = 400;
    throw error;
  }

  // validar existência do resultado
  const [existe] = await db.query(
    "SELECT * FROM resultados WHERE id = ?",
    [id]
  );

  if (existe.length === 0) {
    const error = new Error("Resultado não encontrado");
    error.status = 404;
    throw error;
  }

  // validar nota
  if (nota < 0 || nota > 20) {
    const error = new Error("A nota deve estar entre 0 e 20");
    error.status = 400;
    throw error;
  }

  // validar estudante
  const [user] = await db.query(
    "SELECT cargo FROM utilizadores WHERE id = ?",
    [id_estudante]
  );

  if (user.length === 0) {
    const error = new Error("O estudante indicado não existe");
    error.status = 400;
    throw error;
  }

  if (user[0].cargo !== "Estudante") {
    const error = new Error("Apenas estudantes podem ter resultados");
    error.status = 400;
    throw error;
  }

  // validar teste
  const [teste] = await db.query(
    "SELECT id_disciplina FROM testes WHERE id = ?",
    [id_teste]
  );

  if (teste.length === 0) {
    const error = new Error("O teste indicado não existe");
    error.status = 400;
    throw error;
  }

  const idDisciplina = teste[0].id_disciplina;

  // validar inscrição
  const [inscricao] = await db.query(
    "SELECT * FROM inscricoes WHERE id_estudante = ? AND id_disciplina = ?",
    [id_estudante, idDisciplina]
  );

  if (inscricao.length === 0) {
    const error = new Error(
      "O estudante não está inscrito na disciplina deste teste"
    );
    error.status = 400;
    throw error;
  }

  const [result] = await db.query(
    "UPDATE resultados SET nota = ?, id_estudante = ?, id_teste = ? WHERE id = ?",
    [nota, id_estudante, id_teste, id]
  );

  if (result.affectedRows === 0) {
    const error = new Error("Erro ao atualizar o resultado");
    error.status = 500;
    throw error;
  }

  return {
    id,
    nota,
    id_estudante,
    id_teste
  };
};

/**
 * DELETE /resultados/{id}
 */
const resultadosIdDELETE = async ({ id }) => {
  // validar existência
  const [exists] = await db.query(
    "SELECT * FROM resultados WHERE id = ?",
    [id]
  );

  if (exists.length === 0) {
    const error = new Error("Resultado não encontrado");
    error.status = 404;
    throw error;
  }

  // apagar
  await db.query("DELETE FROM resultados WHERE id = ?", [id]);

  return { message: "Resultado apagado com sucesso" };
};

module.exports = {
  resultadosGET,
  resultadosPOST,
  resultadosIdGET,
  resultadosIdPUT,
  resultadosIdDELETE
};
