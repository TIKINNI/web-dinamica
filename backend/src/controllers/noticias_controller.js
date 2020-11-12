function getNoticia (req, res) {
    const noticias = [
        {
            id: 1,
            title: 'news 1 title',
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

module.exports = getNoticia;