const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema({
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
    fechaPrestamo: {
        type: Date,
        default: Date.now
    },
    fechaDevolucion: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'Completado', 'Atrasado'],
        default: 'Pendiente'
    },
    cantidadPrestada: {
        type: Number,
        required: true,
        min: 1
    }
});