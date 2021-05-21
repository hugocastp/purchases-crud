let mongoose = require("mongoose");

let compraSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    logoUrl: {
        type: String
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    }
});
/*
model = mongoose.model("Compra", compraSchema, "compras");
model.deleteMany({}, function(err) { 
    console.log('collection removed') 
});*/
module.exports = mongoose.model("Compra", compraSchema, "compras");