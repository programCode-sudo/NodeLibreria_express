const libroController = require('../controllers/libroController');
const Libro = require('../models/Libro');
const httpMocks = require('node-mocks-http');

jest.mock('../models/Libro');

const librosSimulados = [
    { id: 1,titulo: "Libro 1", genero: "Ficción", copiasTotales: 5 },
    { id: 2,titulo: "Libro 2", genero: "No Ficción", copiasTotales: 3 },
    { id: 3,titulo: "Libro 3", genero: "Ciencia", copiasTotales: 4 },
    { id: 4,titulo: "Libro 4", genero: "Historia", copiasTotales: 2 },
    { id: 5,titulo: "Libro 5", genero: "Biografía", copiasTotales: 6 }
];

test('getLibros devuelve una lista de libros simulados', async () =>{
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    Libro.find.mockReturnValue({populate: jest.fn().mockResolvedValue(librosSimulados)});
    await libroController.getLibros(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(librosSimulados);
    expect(Libro.find).toHaveBeenCalledWith();
    console.log('Libros obtenidos:', res._getJSONData());
});

test('getLibro por ID devuelve un libro por id', async() => {
    const req = httpMocks.createRequest({
      method: "GET",
      url: "/libros/1",
      params: {
        id: "1",
      },
    });
    const res = httpMocks.createResponse();

    Libro.findById.mockImplementation(() => ({
        populate: async () => librosSimulados[0]
    }));
    
    await libroController.getLibroById(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(librosSimulados[0]);
    expect(Libro.findById).toHaveBeenCalledWith("1");
    console.log('Libro obtenido:', res._getJSONData());
});