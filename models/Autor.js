const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true,
        trim: true
    },
    libros: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Libro'
    }]
});       