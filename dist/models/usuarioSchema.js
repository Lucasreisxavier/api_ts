"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema({
    Nome: { type: String },
    Telefone: { type: Number(13) },
    Email: { type: String },
    idede: { type: Number },
    peso: { type: Number(2) },
    Etinia: { type: Number },
});
exports.default = UsuarioSchema;
