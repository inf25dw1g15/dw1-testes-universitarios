const db = require("../db.js");

/**
 * GET /testes
 */
const testesGET = async () => {
  const [rows] = await db.query("SELECT * FROM testes");
  return rows;
};

/**
 * POST /testes
 */
const testesPOST = async ({ body }) => {
  const { tema, data, id_disciplina, criado_em } = body || {};

  if (!tema || !data || !id_disciplina) {
    const err = new Error("Campos obrigatórios: tema, data, id_disciplina");
    err.status = 400;
    throw err;
  }

  // validar formato da data YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    const err = new Error("Data inválida. Use o formato YYYY-MM-DD");
    err.status = 400;
    throw err;
  }

  // validar disciplina
  const [disciplina] = await db.query(
    "SELECT * FROM disciplinas WHERE id = ?",
    [id_disciplina]
  );

  if (disciplina.length === 0) {
    const err = new Error("A disciplina indicada não existe");
    err.status = 400;
    throw err;
  }

  // validar professor da disciplina
  const [prof] = await db.query(
    "SELECT * FROM utilizadores WHERE id = ? AND cargo = 'Professor'",
    [disciplina[0].id_professor]
  );

  if (prof.length === 0) {
    const err = new Error("O professor associado à disciplina não existe");
    err.status = 400;
    throw err;
  }

  const createdAt = criado_em || new Date().toISOString().split("T")[0];

  const [result] = await db.query(
    "INSERT INTO testes (tema, data, id_disciplina, criado_em) VALUES (?, ?, ?, ?)",
    [tema, data, id_disciplina, createdAt]
  );

  return {
    id: result.insertId,
    tema,
    data,
    id_disciplina,
    criado_em: createdAt
  };
};

/**
 * GET /testes/{id}
 */
const testesIdGET = async ({ id }) => {
  const [rows] = await db.query(
    "SELECT * FROM testes WHERE id = ?",
    [id]
  );

  if (rows.length === 0) {
    const err = new Error("Teste não encontrado");
    err.status = 404;
    throw err;
  }

  return rows[0];
};

/**
 * PUT /testes/{id}
 */
const testesIdPUT = async ({ id, body }) => {
  const { tema, data, id_disciplina, criado_em } = body || {};

  if (!tema || !data || !id_disciplina) {
    const err = new Error("Campos obrigatórios: tema, data, id_disciplina");
    err.status = 400;
    throw err;
  }

  // validar formato da data YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    const err = new Error("Data inválida. Use o formato YYYY-MM-DD");
    err.status = 400;
    throw err;
  }

  // validar que o teste existe
  const [testeExiste] = await db.query(
    "SELECT * FROM testes WHERE id = ?",
    [id]
  );

  if (testeExiste.length === 0) {
    const err = new Error("Teste não encontrado");
    err.status = 404;
    throw err;
  }

  // impedir alterar disciplina se existirem resultados
  const [temResultados] = await db.query(
    "SELECT * FROM resultados WHERE id_teste = ?",
    [id]
  );

  if (temResultados.length > 0 && testeExiste[0].id_disciplina !== id_disciplina) {
    const err = new Error(
      "Não é possível alterar a disciplina: o teste já tem resultados associados"
    );
    err.status = 400;
    throw err;
  }

  // validar disciplina nova
  const [disciplina] = await db.query(
    "SELECT * FROM disciplinas WHERE id = ?",
    [id_disciplina]
  );

  if (disciplina.length === 0) {
    const err = new Error("A disciplina indicada não existe");
    err.status = 400;
    throw err;
  }

  // validar professor dessa disciplina
  const [prof] = await db.query(
    "SELECT * FROM utilizadores WHERE id = ? AND cargo = 'Professor'",
    [disciplina[0].id_professor]
  );

  if (prof.length === 0) {
    const err = new Error("O professor associado à disciplina não existe");
    err.status = 400;
    throw err;
  }

  const createdAt = criado_em || new Date().toISOString().split("T")[0];

  await db.query(
    "UPDATE testes SET tema = ?, data = ?, id_disciplina = ?, criado_em = ? WHERE id = ?",
    [tema, data, id_disciplina, createdAt, id]
  );

  return {
    id,
    tema,
    data,
    id_disciplina,
    criado_em: createdAt
  };
};

/**
 * DELETE /testes/{id}
 */
const testesIdDELETE = async ({ id }) => {

  // impedir apagar teste com resultados
  const [resultados] = await db.query(
    "SELECT * FROM resultados WHERE id_teste = ?",
    [id]
  );

  if (resultados.length > 0) {
    const err = new Error("Não é possível apagar o teste: existem resultados associados.");
    err.status = 400;
    throw err;
  }

  // impedir apagar teste se disciplina associada deixou de existir (raro mas académico)
  const [disc] = await db.query(
    "SELECT * FROM disciplinas WHERE id = (SELECT id_disciplina FROM testes WHERE id = ?)",
    [id]
  );

  if (disc.length === 0) {
    const err = new Error(
      "Não é possível apagar: a disciplina associada ao teste já não existe"
    );
    err.status = 400;
    throw err;
  }

  const [result] = await db.query(
    "DELETE FROM testes WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    const err = new Error("Teste não encontrado");
    err.status = 404;
    throw err;
  }

  return { message: "Teste apagado com sucesso" };
};

/**
 * GET /testes/{id}/resultados
 */
const testesIdResultadosGET = async ({ id }) => {
  const [rows] = await db.query(
    "SELECT * FROM resultados WHERE id_teste = ?",
    [id]
  );

  return rows;
};

module.exports = {
  testesGET,
  testesPOST,
  testesIdGET,
  testesIdPUT,
  testesIdDELETE,
  testesIdResultadosGET
};