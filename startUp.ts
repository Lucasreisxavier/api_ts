import * as express from "express";
import * as bodyParser from "body-parser";

import Database from "./infra/db";
import usuarioController from "./controller/usuarioController";
import enderecoController from "./controller/enderecoController"

class StartUp {
  
  public app: express.Application;
  private _db: Database;
  private bodyParser;

  constructor() {
    this.app = express();
    this._db = new Database();
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
    this.app.route("/api/v1/usuario").get(usuarioController.get);
    this.app.route("/api/v1/usuario/:id").get(usuarioController.getById);
    this.app.route("/api/v1/usuario").post(usuarioController.create);
    this.app.route("/api/v1/usuario/:id").put(usuarioController.update);
    this.app.route("/api/v1/usuario/:id").delete(usuarioController.delete);

    this.app.route("/api/v1/endereco").get(enderecoController.get);
    this.app.route("/api/v1/endereco/:id").get(enderecoController.getById);
    this.app.route("/api/v1/endereco").post(enderecoController.create);
    this.app.route("/api/v1/endereco/:id").put(enderecoController.update);
    this.app.route("/api/v1/endereco/:id").delete(enderecoController.delete);

  }
}

export default new StartUp();
