"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const EnderecoSchema = new mongoose.Schema({
    endereco: { type: String },
    numero: { type: Number },
    complemento: { type: String },
    CEP: { type: Number },
    cidade: { type: String },
    Estado: { type: String },
});
exports.default = EnderecoSchema;
