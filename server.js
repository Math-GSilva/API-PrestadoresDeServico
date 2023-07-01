import express from "express";
import cors from "cors";
import db from "./config/database.js";
import servicoRota from "./routers/servico_routes.js";
import categoriaRota from "./routers/categoria_routes.js";
import prestadorRota from "./routers/prestador_routes.js";
import tokenRota from "./routers/token_routes.js";

import Categoria from "./models/categoria_model.js";
import Prestador from "./models/prestador_model.js";
import Servico from "./models/servico_model.js";

const server = express();
server.use(express.json());
server.use(cors());

try {
  await db.authenticate();
  console.log("Conexão com o MySQl estabelecida!");
} catch (e) {
  console.log("Conexão com o MySQL não etabelecida", e);
}

Prestador.belongsTo(Categoria, {
  foreignKey: "cod_categoria",
  as: "categoria",
  allowNull: false,
});
Prestador.belongsTo(Servico, {
  foreignKey: "cod_servico_principal",
  as: "servicoPrincipal",
  allowNull: false,
});

Categoria.hasMany(Prestador, { foreignKey: "cod_categoria" });
Servico.hasMany(Prestador, { foreignKey: "cod_servico_principal" });

server.use(prestadorRota);
server.use(categoriaRota);
server.use(servicoRota);
server.use(tokenRota);
server.listen(5000, () =>
  console.log("server executando em http://localhost:5000")
);
