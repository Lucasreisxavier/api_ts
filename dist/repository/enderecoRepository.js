"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const enderecoSchema_1 = require("../models/enderecoSchema");
exports.default = mongoose.model("endereco", enderecoSchema_1.default);
