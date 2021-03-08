"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enderecoService_1 = require("../services/enderecoService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class enderecoController {
    get(req, res) {
        enderecoService_1.default.get()
            .then(endereco => helper_1.default.sendResponse(res, HttpStatus.OK, endereco))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        enderecoService_1.default.getById(_id)
            .then(endereco => helper_1.default.sendResponse(res, HttpStatus.OK, endereco))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        enderecoService_1.default.create(vm)
            .then(endereco => helper_1.default.sendResponse(res, HttpStatus.OK, "endereco cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let endereco = req.body;
        enderecoService_1.default.update(_id, endereco)
            .then(endereco => helper_1.default.sendResponse(res, HttpStatus.OK, "Uendereco atualizado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        enderecoService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "endereco deletado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new enderecoController();
