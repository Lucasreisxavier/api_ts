import * as mongoose from "mongoose";
import enderecoSchema from "../models/enderecoSchema";


export default mongoose.model("endereco", enderecoSchema);
