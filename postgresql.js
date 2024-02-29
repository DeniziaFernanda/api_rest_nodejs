const { Client } = require('pg');

// Configurações da conexão com o PostgreSQL
var client = new Client({
  "user": process.env.POSTGRES_USER,
  "host": process.env.POSTGRES_HOST,
  "database": process.env.POSTGRES_DATABASE,
  "password": process.env.POSTGRES_PASSWORD,
  "port": process.env.POSTGRES_PORT, // Porta padrão do PostgreSQL
});

// Conecta ao banco de dados
client.connect()
  .then(() => console.log('Conectado ao PostgreSQL com sucesso'))
  .catch(err => console.error('Erro ao conectar ao PostgreSQL', err));

// Exporta o cliente para ser utilizado em outros arquivos
module.exports = client;