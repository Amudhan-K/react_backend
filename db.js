const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'esysflow.cptg6ebuhlrv.eu-north-1.rds.amazonaws.com',
  database: 'nodedb',
  password: 'simtestlab123',
  port: 5432,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
