"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enderecoRepository_1 = require("../repository/enderecoRepository");
class enderecoService {
    get() {
        return enderecoRepository_1.default.find({});
    }
    getById(_id) {
        return enderecoRepository_1.default.findById(_id);
    }
    create(endereco) {
        return enderecoRepository_1.default.create(endereco);
    }
    update(_id, endereco) {
        return enderecoRepository_1.default.findByIdAndUpdate(_id, endereco);
    }
    delete(_id) {
        return enderecoRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new enderecoService();
