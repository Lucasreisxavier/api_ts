"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioRepository_1 = require("../repository/usuarioRepository");
class usuarioService {
    get() {
        return usuarioRepository_1.default.find({});
    }
    getById(_id) {
        return usuarioRepository_1.default.findById(_id);
    }
    create(usuario) {
        return usuarioRepository_1.default.create(usuario);
    }
    update(_id, usuario) {
        return usuarioRepository_1.default.findByIdAndUpdate(_id, usuario);
    }
    delete(_id) {
        return usuarioRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new usuarioService();
