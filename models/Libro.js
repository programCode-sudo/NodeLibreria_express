const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo : {
        type : String,
        required : true,
        trim : true
    },
    genero : {
        type : String,
        enum : ['Ficción', 'No Ficción', 'Ciencia', 'Historia', 'Biografía', 'Fantasía', 'Misterio', 'Romance'],
        required : true
    },
    fechaPublicacion : {
        type : Date,
        default : Date.now
    },
    disponible : {
        type : Boolean,
        default : true
    },
    ubicacion : {
        estante : { type: Number, Min: 1},
        fila : { type : Number, Min: 1}
    },
    autores : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Autor'
    }],
    copiasTotales : {
        type : Number,
        required : true,
        min : 1
    },
});

module.exports = mongoose.model('Libro', libroSchema);