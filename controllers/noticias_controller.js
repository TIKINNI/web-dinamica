const noticias = require('../database/database');
let next_id = 5;
const incrementarId = () => {
    next_id++;
}
function getNoticia(req, res) {
    if (req.params.id) {
        const noticia = noticias.find(noticia => noticia.id == req.params.id);
        //console.log(req.params);
        return noticia ?
            res.status(200).json({
                message: 'success',
                noticia: noticia,
            }) :
            res.status(404).json({
                message: 'not found',
            });
    } else {
        return res.status(400).json({
            message: 'bad request',
        });
    }
}

function getNoticias(req, res) {
    //console.log("HOLA!");
    //console.log(req.headers);
    res.status(200).json({
        message: 'success',
        noticias,
    });
}
function getNoticiasDelDia(req, res) {

    const noticiasResult = noticias.filter(elem => elem.dia == req.params.dia);
    res.status(200).json({
        message: 'success',
        resultado: noticiasResult,
    });
}
function addNoticia(req, res) {
    //console.log(req.body);

    const { fuente, titulo, subtitulo, contenido, imagen } = req.body;
    const noticiaNueva = {
        id: next_id,
        fuente,
        titulo,
        subtitulo,
        contenido,
        imagen
    }
    incrementarId();
    noticias.push(noticiaNueva);
    res.status(200).json({
        message: 'success',
        noticiaNueva,
    });
    
}
function deleteNoticia(req, res) {
    if (req.params.id) {
        const noticia = noticias.find(noticia => noticia.id == req.params.id );
        //console.log(req.params);
        if (noticia) {
            const indiceAEliminar = noticias.indexOf(noticia);
            noticias.splice(indiceAEliminar, 1);
            res.status(200).json({
                message: 'success',
                eliminado: noticia,
            })
        } else {
            res.status(404).json({
                message: 'not found',
            });
        }  
    } else {
        return res.status(400).json({
            message: 'bad request',
        });
    }
}
function updateNoticia(req, res) {
    if (req.params.id) {
        const noticia = noticias.find(noticia => noticia.id == req.params.id);
        //console.log(req.params);
        if (noticia) {
            const { fuente, titulo, subtitulo, contenido, imagen } = req.body;
            noticia.fuente = fuente;
            noticia.titulo = titulo;
            noticia.subtitulo = subtitulo;
            noticia.contenido = contenido;
            noticia.imagen = imagen;
            res.status(200).json({
                message: 'success',
                noticia: noticia,
            })
        } else {
            res.status(404).json({
                message: 'not found',
            });
        }  
    } else {
        return res.status(400).json({
            message: 'bad request',
        });
    }
}
module.exports = {
    addNoticia,
    getNoticia,
    getNoticias,
    updateNoticia,
    deleteNoticia,
    getNoticiasDelDia
};