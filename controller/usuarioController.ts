import usuarioService from "../services/usuarioService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class usuarioController {
  get(req, res) {
    usuarioService.get()
      .then(usuario => Helper.sendResponse(res, HttpStatus.OK, usuario))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    usuarioService.getById(_id)
      .then(usuario => Helper.sendResponse(res, HttpStatus.OK, usuario))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    usuarioService.create(vm)
      .then(usuario =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Usuario cadastrado com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let usuario = req.body;

    usuarioService.update(_id, usuario)
      .then(usuario =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Usuario atualizado com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    usuarioService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Usuario deletado com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new usuarioController();
