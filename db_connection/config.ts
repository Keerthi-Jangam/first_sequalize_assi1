const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    "KeerthiFirstDatabase",
    "postgres",
    "Rachubai123*",
    {
      host: "localhost",
      dialect: "postgres",
      port: 5432,
    }
  );
  export {sequelize}