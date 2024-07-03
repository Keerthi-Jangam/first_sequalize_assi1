const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('KeerthiFirstDatabase', 'postgres', 'Rachubai123*', {
    host: 'localhost',
    dialect: 'postgres',
    port : 5432
  });
const connectionFunction = async ()=>{try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }}
  connectionFunction();
  export {sequelize};
