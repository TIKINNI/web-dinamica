const express = require('express');
const noticiasRoute = require('./routes/noticias_route');
const path = require('path');



const app = express();
const port = 3000;
app.use(express.json());

    // Require static assets from public folder
    app.use(express.static(path.join(__dirname, 'public')));
    // Set view engine as EJS
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    // Set 'views' directory for any views 
    // being rendered res.render()
    app.set('views', path.join(__dirname, ''));
    app.use('/form', express.static(__dirname + '/index.html'));


app.get('/home', (req, res) => {
    res.render(path.join(__dirname, 'views/home.ejs'));
});

app.get('/:anio/:mes/:dia', (req, res) => {
    res.render(path.join(__dirname, 'views', req.params.anio, req.params.mes, req.params.dia));
});

//routes
app.use('/noticias', noticiasRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;


