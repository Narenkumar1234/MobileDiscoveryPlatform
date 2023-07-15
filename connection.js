const Pool = require("pg").Pool;

const devConfig = {
  type: "postgres",
  connectionString:
    "postgresql://postgres:Narenkumar123*@db.hchugyiucmdbpwinybhx.supabase.co:5432/postgres",
};

const pool = new Pool(devConfig);
module.exports = pool;
