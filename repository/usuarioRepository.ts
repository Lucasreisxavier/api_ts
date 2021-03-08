import * as mongoose from "mongoose";
import usuarioSchema from "../models/usuarioSchema";


export default mongoose.model("usuario", usuarioSchema);
