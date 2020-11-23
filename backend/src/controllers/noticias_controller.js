const noticias = [
        {
            id: 1,
            title: 'news 111111111 title',
            content: 'news 1 content',
            img: 'news 1 img',
        },
        {
            id: 2,
            title: 'news 2 title',
            content: 'news 2 content',
            img: 'news 2 img',
        }
];
let next_id = 3;
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
    
    res.status(200).json({
        message: 'success',
        noticias,
    });
}

function addNoticia(req, res) {
    //console.log(req.body);

    const { title, content, img } = req.body;
    const noticiaNueva = {
        id: next_id,
        title,
        content,
        img
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
        const noticia = noticias.find(noticia => noticia.id == req.params.id);
        //console.log(req.params);
        if (noticia) {
            const indiceAEliminar = noticias.indexOf(noticia);
            noticias.splice(indiceAEliminar, 1);
            res.status(200).json({
                message: 'success',
                eliminiado: noticia,
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
            const { title, content, img } = req.body;
            noticia.title = title;
            noticia.content = content;
            noticia.img = img;
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
    deleteNoticia
};