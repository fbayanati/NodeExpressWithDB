const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');

let app = express();
app.use( morgan('tiny') );
app.use( bodyParser.json() );   // application/json

// Add the CORS access allow to the response header 
app.use( (req, res, next) => {
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader( "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE" );
    res.setHeader( "Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, X-Requested-With, remember-me" );
    next();
});

app.get( '/', (req, res) => {
    res.status(200).send('Hello from Node/Express!');
});

app.listen( 3000, () => {
    console.log( `Up and Running and Listening on port ${chalk.green(3000)} !`);
})
