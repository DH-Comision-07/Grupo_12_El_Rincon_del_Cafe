require("dotenv").config();

let configDb = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  },
};

module.exports = configDb;
