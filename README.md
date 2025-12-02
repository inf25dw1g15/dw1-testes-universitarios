## Gestão de Testes Universitários

## Introdução

Este relatório descreve o desenvolvimento de uma API completa para gestão de testes universitários, abordando a sua arquitetura, funcionalidades, documentação, validação, testes e integração com Docker.

## Objetivos

* Criar uma API totalmente funcional com suporte CRUD para 5 entidades principais.
* Implementar relações complexas entre utilizadores, disciplinas, testes, resultados e inscrições.
* Assegurar validação automática através de OpenAPI Validator.
* Organizar documentação completa usando Swagger (OpenAPI 3).
* Garantir execução via Docker com serviços independentes.
* Realizar testes completos em Postman incluindo testes de erro.

## Metodologia

O desenvolvimento foi realizado com base na especificação OpenAPI 3, seguindo os seguintes passos:

* Definição das entidades e respetivos esquemas.
* Criação dos controladores, serviços e rotas seguindo arquitetura modular.
* Implementação de lógica de negócio com validação de regras e integridade.
* Construção da base de dados MySQL e definição do schema inicial.
* Documentação da API via Swagger UI.
* Criação de ambiente Docker com serviços para API e base de dados.
* Testes estruturados através de Postman com organização por recursos.

## Desenvolvimento / Fundamentação Teórica

A API foi desenvolvida com foco na separação clara entre camadas (controllers, services, data), utilizando práticas recomendadas para APIs REST.

### Documentação (Swagger / OpenAPI 3)

* Schemas definidos para todas as entidades: Utilizadores, Disciplinas, Testes, Resultados e Inscrições.
* Exemplos incluídos para facilitar testes.
* Organization dos endpoints por área através de tags.
* Validação do YAML: o servidor apenas arranca quando o ficheiro está válido, evitando erros em runtime.

### Lógica da Aplicação

* Validação rigorosa de dados recebidos.
* Respeito pelas regras de integridade, como impedir apagar utilizadores com inscrições ou resultados.
* Diferenciação entre perfis de utilizador (estudante/professor).
* Gestão de relações:

  * Utilizadores ↔ Disciplinas
  * Estudantes ↔ Inscrições
  * Professores ↔ Disciplinas
  * Testes ↔ Resultados

### Regras Implementadas

* Um utilizador não pode estar numa disciplina sem inscrição.
* Apenas estudantes podem realizar inscrições.
* Antes de apagar um utilizador, o sistema verifica inscrições e resultados associados.
* Professores apenas surgem nas disciplinas que lecionam.
* Estudantes apenas visualizam as disciplinas onde estão inscritos.

### Base de Dados

Foram concebidas 5 tabelas principais:

* Utilizadores
* Disciplinas
* Testes
* Resultados
* Inscrições

## Resultados

### Testes no Postman

* Coleção organizada em pastas por recurso.
* Variável global `{{base_url}}` para facilitar mudanças de ambiente.
* Testes completos para GET, POST, PUT e DELETE.
* Testes de erro para respostas 404 e 409.

### Scripts Incluídos

* Criar utilizador
* Atualizar utilizador
* Apagar utilizador
* Consultar todos os utilizadores
* Consultar utilizador específico

### Docker

Foi criado um ambiente dockerizado com:

* Serviço API (Node + Express + OpenAPI Validator)
* Serviço MySQL com seed automático e healthcheck
* Volumes persistentes
* Redes internas
* Execução via comando único: `docker compose up`

### Contribuição da IA

* Identificação e correção de erros em serviços.
* Sugestão de melhorias de lógica e validação.
* Criação de dados seed (30 registos por tabela).

## Discussão

O projeto demonstra uma implementação sólida de uma API REST completa, com documentação rigorosa, validação robusta e integração contínua. A clara separação entre camadas e o uso de Docker contribuem para portabilidade e facilidade de manutenção. Os testes garantem consistência e fiabilidade dos endpoints.
