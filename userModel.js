const { version } = require("mongoose");

const mongoose= require ('mongoose');
const userModel = new mongoose.Schema(
{
    name: {
        type: String 
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    Tipo_de_robo: {
        type: String
    },
    Años_de_sentencia: {
        type: String
    },
    Años_cumplidos_en_la_cárcel: {
        type: String
    }

},

{
    timestamps: true,
    versionKey: false,
})



const ModelUser = mongoose.model("users", userModel);
module.exports = ModelUser; 
