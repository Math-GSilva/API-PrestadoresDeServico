import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Prestador = db.define(
  "prestador_servico",
  {
    codigo_prestador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_prestador: {
      type: Sequelize.STRING(200),
    },
    cpf_prestador: {
      type: Sequelize.STRING(18),
    },
    cod_categoria: {
      type: DataTypes.INTEGER,
    },
    cod_servico_principal: {
      type: DataTypes.INTEGER,
    },
    anos_experiencia: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
export default Prestador;
