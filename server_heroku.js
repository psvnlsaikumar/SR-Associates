var http = require('http');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT



app.get('/', function(req, res){
    res.render('index');
});

app.listen(PORT);