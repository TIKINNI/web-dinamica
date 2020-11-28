const express = require('express');
const noticiasRoute = require('./routes/noticias_route');
const path = require('path');



const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static('public'));


app.get('/home', (req, res) => {
    res.render(path.join(__dirname, 'views/home.ejs'));
});

//routes
app.use('/noticias', noticiasRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;


