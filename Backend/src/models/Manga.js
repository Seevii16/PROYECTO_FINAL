const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const mangasSchema = new Schema({
    "mangaNombre": {
        "type": "String"
    },
    "mangaVolumen": {
        "type": "String"
    },
    "mangaDescripcion": {
        "type": "String"
    },
    "mangaDemografia": {
        "type": "String"
    },
    "mangaGenero": {
        "type": "String"
    },
    "mangaPrecio": {
        "type": "Number"
    },
    "imgURL":{
        "type": "String"
    }
});
const manga = mongoose.model("Manga", mangasSchema);


module.exports = manga;