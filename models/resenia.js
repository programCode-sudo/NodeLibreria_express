const mongoose = require('mongoose');

const ReseniaSchema = new mongoose.Schema({
    libro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Libro',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    putuacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comentario: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    }
});