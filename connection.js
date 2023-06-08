const Pool = require("pg").Pool;

const devConfig = {
  type: "postgres",
  connectionString:
    "postgresql://postgres:Narenkumar123*@db.hchugyiucmdbpwinybhx.supabase.co:5432/postgres",
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: 0,
  },
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
module.exports = pool;
