import { Sequelize } from "sequelize";

const db = new Sequelize("avaliacao_n3", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
