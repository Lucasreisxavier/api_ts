"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const usuarioSchema_1 = require("../models/usuarioSchema");
exports.default = mongoose.model("usuario", usuarioSchema_1.default);
