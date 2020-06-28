// Server is set up with express

const express = require('express');
const engine = require('ejs-mate')
const path = require('path')

//  initialization 
const app = express();


// settings
app.engine('ejs', engine);
app.set('port', 8080);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, '/public')))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server in port: ${app.get('port')}`)
});