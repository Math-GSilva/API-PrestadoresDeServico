import dotenv from "dotenv-safe";
dotenv.config();

import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    if (req.body.user === "adm" && req.body.pwd === "adm") {
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: "24h",
      });
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: "Login Inválido" });
  } catch (e) {
    res.json({
      message: "Erro ao efetuar login!",
      body: e,
    });
  }
};

export default function verificarToken(req, res) {
  const token = req.headers['x-access-token']
    if (!token) throw `Não há token!`;

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) throw `token não autorizado!`;   
    })
}

