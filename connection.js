const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  type: "postgres",
  connectionString:
    process.env.DATABASE_URL,
};

const pool = new Pool(devConfig);
module.exports = pool;
