const Pool = require ("pg").Pool;
require("dotenv").config();

const devConfig ={
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  type: "postgres",
  connectionString: "postgres://bplxhkzczafsio:366325c84539498ba043cb28c89872258c9cff63148ff6b0af501d63a4441926@ec2-54-220-170-192.eu-west-1.compute.amazonaws.com:5432/d56v5n6stekh7u",
    ssl: {
      rejectUnauthorized: 0
    },
};

const proConfig ={
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: 0
  },
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig)
module.exports = pool;
