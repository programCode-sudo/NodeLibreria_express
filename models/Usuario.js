const mongoose = mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    esEmpleado: {
        type: Boolean,
        default: false
    },
    historialPrestamos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestamo'
    }]
    
});