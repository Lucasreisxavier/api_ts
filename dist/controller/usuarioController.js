"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioService_1 = require("../services/usuarioService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class usuarioController {
    get(req, res) {
        usuarioService_1.default.get()
            .then(usuario => helper_1.default.sendResponse(res, HttpStatus.OK, usuario))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        usuarioService_1.default.getById(_id)
            .then(usuario => helper_1.default.sendResponse(res, HttpStatus.OK, usuario))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        usuarioService_1.default.create(vm)
            .then(usuario => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let usuario = req.body;
        usuarioService_1.default.update(_id, usuario)
            .then(usuario => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario atualizado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        usuarioService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario deletado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new usuarioController();
