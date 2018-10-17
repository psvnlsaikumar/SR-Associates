var express = require('express');
var app = express();

app.set('view engine', 'ejs');
// app.use('/assets', express.static(__dirname + 'assets'));
app.use(express.static("."));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/index', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/blog', function(req, res){
    res.render('blog');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/practice', function(req, res){
    res.render('practice');
});

app.get('/services', function(req, res){
    res.render('services');
});

app.get('/won', function(req, res){
    res.render('won');
});


app.listen(8080);