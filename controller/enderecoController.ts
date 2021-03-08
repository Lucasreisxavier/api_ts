import enderecoService from "../services/enderecoService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class enderecoController {
  get(req, res) {
    enderecoService.get()
      .then(endereco => Helper.sendResponse(res, HttpStatus.OK, endereco))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    enderecoService.getById(_id)
      .then(endereco => Helper.sendResponse(res, HttpStatus.OK, endereco))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    enderecoService.create(vm)
      .then(endereco =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "endereco cadastrado com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let endereco = req.body;

    enderecoService.update(_id, endereco)
      .then(endereco =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Uendereco atualizado com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    enderecoService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "endereco deletado com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new enderecoController();
