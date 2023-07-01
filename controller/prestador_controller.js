import Prestador from "../models/prestador_model.js";
import Servico from "../models/servico_model.js";
import Categoria from "../models/categoria_model.js";
import verificarToken from "./token_controller.js";

export const getPrestadores = async (req, res) => {
  try {
    verificarToken(req, res)
    const prestadores = await Prestador.findAll({
      include: [
        { model: Servico, as: "servicoPrincipal" },
        { model: Categoria, as: "categoria" },
      ],
    });

    prestadores.forEach((prestador) => {
      prestador.servicoPrincipal.vlr_servico = _calcValorServico(
        prestador.anos_experiencia
      );
    });

    res.send(prestadores);
  } catch (e) {
    res.json({
      message: "Erro ao acessar a tabela Prestador de Serviços!",
      body: e,
    });
  }
};

export const getPrestadoresByCategoria = async (req, res) => {
  try {
    verificarToken(req, res)
    const prestadores = await Prestador.findAll({
      where:{
        cod_categoria: req.params.idCategoria
      },
      include: [
        { model: Servico, as: "servicoPrincipal" },
        { model: Categoria, as: "categoria" },
      ],
    });

    prestadores.forEach((prestador) => {
      prestador.servicoPrincipal.vlr_servico = _calcValorServico(
        prestador.anos_experiencia
      );
    });

    res.send(prestadores);
  } catch (e) {
    res.json({
      message: "Erro ao acessar a tabela Prestador de Serviços!",
      body: e,
    });
  }
};

export const getPrestadoresByServico = async (req, res) => {
  try {
    verificarToken(req, res)
    const prestadores = await Prestador.findAll({
      where:{
        cod_servico_principal: req.params.idServico
      },
      include: [
        { model: Servico, as: "servicoPrincipal" },
        { model: Categoria, as: "categoria" },
      ],
    });

    prestadores.forEach((prestador) => {
      prestador.servicoPrincipal.vlr_servico = _calcValorServico(
        prestador.anos_experiencia
      );
    });

    res.send(prestadores);
  } catch (e) {
    res.json({
      message: "Erro ao acessar a tabela Prestador de Serviços!",
      body: e,
    });
  }
};

export const createPrestador = async (req, res) => {
  try {
    verificarToken(req, res)
    const { cod_categoria, cod_servico_principal } = req.body;

    if (!cod_categoria > 0) {
      throw `Informe uma categoria válida!`;
    }
    if (!cod_servico_principal > 0) {
      throw `Informe uma serviço válido!`;
    }

    const categoria = await Categoria.findByPk(cod_categoria);
    const servico = await Servico.findByPk(cod_servico_principal);

    if (!categoria) {
      throw `Não há categoria cadastrada com o código ${cod_categoria}`;
    }

    if (!servico) {
      throw `Não há serviço cadastrado com o código ${cod_servico_principal}`;
    }

    const prestador = await Prestador.create(req.body);
    res.json({
      message: "Prestador de Serviços cadastrado com sucesso!",
      body: prestador,
    });
  } catch (e) {
    res.json({
      message: "Erro ao Inserir um novo prestador de serviços!",
      body: e,
    });
  }
};

export const updatePrestador = async (req, res) => {
  try {
    verificarToken(req, res)
    await Prestador.update(req.body, {
      where: {
        codigo_prestador: req.params.id,
      },
    });
    res.json({
      message: "O prestador de serviços " + req.params.id + " foi atualizado",
    });
  } catch (e) {
    res.json({
      message: "Erro ao atualizar prestador de serviços!",
      body: e,
    });
  }
};

export const deletePrestador = async (req, res) => {
  try {
    verificarToken(req, res)
    await Prestador.destroy({
      where: {
        codigo_prestador: req.params.id,
      },
    });
    res.json({
      message:
        "O prestador de serviços " +
        req.params.id +
        " Foi excluído do Banco de Dados",
    });
  } catch (e) {
    res.json({
      message: "Erro ao excluir o prestador de serviços!",
      body: e,
    });
  }
};

function _calcValorServico(anosExperiencia) {
  if (anosExperiencia == 3) return 50 + 50 * 0.3;
  else if (anosExperiencia > 3 && anosExperiencia <= 5) return 50 + 50 * 0.5;
  else if (anosExperiencia > 5) return 50 + 50 * 0.75;
  else return 50;
}
