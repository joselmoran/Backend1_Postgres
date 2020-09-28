const {Pool} = require('pg');
const connectionString = 'postgresql://eleinco:eleinco@localhost:5432/lab1';
const pool = new Pool({
  connectionString: connectionString,
  ssl: false
});

module.exports = {pool};
