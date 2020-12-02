const BASE_URL= 'http://localhost:5000/images/';
const database = [
    {
        id: 1,
        fuente: 'La Nacion',
        titulo: 'Volvio a subir el dolar',
        subtitulo: 'Otra vez se fue al carajo todo',
        contenido: 'La gente pide que les devuelvan la guita, terrible bardo.',
        imagen: `${BASE_URL}01022020.jpg`,
        dia: 2,
    },
    {
        id: 2,
        fuente: 'Clarin',
        titulo: 'Quilombos en paises limitrofes',
        subtitulo: 'Otra vez se fue al carajo todo pero en otro pais',
        contenido: 'La gente pide que les devuelvan la guita, terrible bardo. Quemaron a un pelado.',
        imagen: `${BASE_URL}02022020.jpg`,
        dia: 2,
    },
]
module.exports = database;