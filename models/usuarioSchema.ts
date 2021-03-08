import * as mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  Nome: { type: String },
  Telefone: { type: Number(13) },
  Email: { type: String },
  idede: { type: Number },
  peso: { type: Number(2) },
  Etinia: { type: Number },
});

export default UsuarioSchema;