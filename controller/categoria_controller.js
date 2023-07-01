import Categoria from "../models/categoria_model.js";
import verificarToken from "./token_controller.js";

export const getCategorias = async (req, res) => {
  try {
    verificarToken(req, res)
    const categorias = await Categoria.findAll();
    res.send(categorias);
  } catch (e) {
    res.json({
      message: "Erro ao acessar a tabela de categorias!",
      body: e,
    });
  }
};

export const createCategoria = async (req, res) => {
  try {
    verificarToken(req, res)
    const categoria = await Categoria.create(req.body);
    res.json({
      message: "Nova categoria cadastrada com sucesso!",
      body: categoria,
    });
  } catch (e) {
    res.json({
      message: "Erro ao Inserir uma nova categoria!",
      body: e,
    });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    verificarToken(req, res)
    await Categoria.update(req.body, {
      where: {
        id_categoria: req.params.id,
      },
    });
    res.json({
      message: "Categoria com id " + req.params.id + " foi atualizada",
    });
  } catch (e) {
    res.json({
      message: "Erro ao atualizar categoria!",
      body: e,
    });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    verificarToken(req, res)
    await Categoria.destroy({
      where: {
        id_categoria: req.params.id,
      },
    });
    res.json({
      message:
        "A categoria com código " +
        req.params.id +
        " foi excluída do Banco de Dados",
    });
  } catch (e) {
    res.json({
      message: "Erro ao excluir categoria!",
      body: e,
    });
  }
};
