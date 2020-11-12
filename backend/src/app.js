const express = require('express');
const noticiasRoute = require('./routes/noticias_route');

const app = express();
const port = 3000;

//routes
app.use('/noticias', noticiasRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/
