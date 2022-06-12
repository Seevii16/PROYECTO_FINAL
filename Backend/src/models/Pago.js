const mongoose = require("mongoose");
let Schema = mongoose.Schema;


const pagosSchema = new Schema({
    "total": {
        "type": "Number"
    },
    "precio": {
        "type": "Number"
    },
    "_id" :{
        ref: "Usuario",
        type: String
    }
    
});
let Pago = mongoose.model("pago", pagosSchema);

module.exports = Pago;