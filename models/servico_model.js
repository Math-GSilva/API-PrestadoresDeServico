import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Servico = db.define(
  "servico",
  {
    id_servico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_serviço: {
      type: Sequelize.STRING(200),
    },
    vlr_servico: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
export default Servico;
