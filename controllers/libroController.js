const Libro = require('../models/Libro');

//Obtener todos los libros
exports.getLibros = async (req, res) => {
    try {
        const libros = await Libro.find().populate('autores');
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
    }
};

exports.getLibroById = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id).populate('autores');
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el libro', error: error.message });
    }
}