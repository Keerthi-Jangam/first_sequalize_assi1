// const { Sequelize } = require("sequelize");
import { User } from "../Models/UserDetails";
import { sequelize } from "./config";

// const sequelize = new Sequelize(
//   "KeerthiFirstDatabase",
//   "postgres",
//   "Rachubai123*",
//   {
//     host: "localhost",
//     dialect: "postgres",
//     port: 5432,
//   }
// );
const connectionFunction = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await User.sync({force:true})
    console.log("table created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// const firstTable = async () => {
//   try {
//     await User.sync({ force: true });
//     console.log("table created");
//   } catch (error) {
//     console.error("unable to create table", error);
//   }
// };

connectionFunction();
// firstTable();
export { sequelize };
