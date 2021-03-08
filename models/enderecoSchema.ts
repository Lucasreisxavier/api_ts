import * as mongoose from "mongoose";

const EnderecoSchema = new mongoose.Schema({
  endereco: { type: String },
  numero: { type: Number },
  complemento: { type: String },
  CEP: { type: Number },
  cidade: { type: String},
  Estado: { type: String },
});

export default EnderecoSchema;


