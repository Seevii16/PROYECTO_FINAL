const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const rolesSchema = new Schema(
  {
    nombre: String,
  },
  { versionKey: false }
);

let rol = mongoose.model("Rol", rolesSchema);

module.exports = rol;
