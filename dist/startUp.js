"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const usuarioController_1 = require("./controller/usuarioController");
const enderecoController_1 = require("./controller/enderecoController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        //new
        this.app.route("/api/v1/usuario").get(usuarioController_1.default.get);
        this.app.route("/api/v1/usuario/:id").get(usuarioController_1.default.getById);
        this.app.route("/api/v1/usuario").post(usuarioController_1.default.create);
        this.app.route("/api/v1/usuario/:id").put(usuarioController_1.default.update);
        this.app.route("/api/v1/usuario/:id").delete(usuarioController_1.default.delete);
        this.app.route("/api/v1/endereco").get(enderecoController_1.default.get);
        this.app.route("/api/v1/endereco/:id").get(enderecoController_1.default.getById);
        this.app.route("/api/v1/endereco").post(enderecoController_1.default.create);
        this.app.route("/api/v1/endereco/:id").put(enderecoController_1.default.update);
        this.app.route("/api/v1/endereco/:id").delete(enderecoController_1.default.delete);
    }
}
exports.default = new StartUp();
