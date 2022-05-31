const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const ROLES = ["usuario", "admin"];

const rolesSchema = new Schema(
  {
    nombre: String,
  },
  { versionKey: false }
);

let rol = mongoose.model("Rol", rolesSchema);

module.exports = {
  rol,ROLES
}
