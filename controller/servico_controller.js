import Servico from "../models/servico_model.js";
import verificarToken from "./token_controller.js";

export const getServicos = async (req, res) => {
  try {
    verificarToken(req, res)
    console.log("passou")
    const servicos = await Servico.findAll();
    res.send(servicos);
  } catch (e) {
    res.json({
      message: "Erro ao acessar a tabela servicos!",
      body: e,
    });
  }
};

export const createServico = async (req, res) => {
  try {
    verificarToken(req, res)
    req.body.vlr_servico = 50;
    const servicoCadastrado = await Servico.create(req.body);
    res.json({
      message: "Novo serviço cadastrado com sucesso!",
      body: servicoCadastrado,
    });
  } catch (e) {
    res.json({
      message: "Erro ao Inserir um novo serviço!",
      body: e,
    });
  }
};

export const updateServiço = async (req, res) => {
  try {
    verificarToken(req, res)
    await Servico.update(req.body, {
      where: {
        id_servico: req.params.id,
      },
    });
    res.json({
      message: "Serviço com id " + req.params.id + " foi atualizado",
    });
  } catch (e) {
    res.json({
      message: "Erro ao atualizar serviço!",
      body: e,
    });
  }
};

export const deleteServico = async (req, res) => {
  try {
    verificarToken(req, res)
    await Servico.destroy({
      where: {
        id_servico: req.params.id,
      },
    });
    res.json({
      message:
        "O serviço com código " +
        req.params.id +
        " foi excluído do Banco de Dados",
    });
  } catch (e) {
    res.json({
      message: "Erro ao excluir serviço!",
      body: e,
    });
  }
};
