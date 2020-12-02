// Imports
const express = require('express')
//const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const noticiasRoute = require('./routes/noticias_route');

const app = express()
const port = 5000

app.use(express.json());

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/noticias', noticiasRoute);

// Set Templating Engine
//app.use(expressLayouts)
//app.set('layout', './layouts/full-width')
//app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    //console.log(__dirname);
    //res.render('index', { title: 'Home Page'})
    res.sendFile(path.join(__dirname + '/views/index.html'))
})
/*
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar' })
})
*/
// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))