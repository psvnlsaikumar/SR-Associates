var http = require('http');
const bodyParser = require('body-parser');
const sendmail = require('./mail/sendmail');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT

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

app.post('/contact', function(req, res){

    var message = "\n The First name of the client is " + req.body.firstname +
                    "\n The Last name of the client is " + req.body.lastname +
                    "\n The Email of the client is " + req.body.email + "\n\n\n The message of the client is \n"
                     + req.body.message; 
    var mailOptions = {
        from: req.body.email,
        to: 'saiyah0007@gmail.com',
        subject: req.body.subject,
        text: message
    }
    sendmail.transporter.sendMail(mailOptions);
    res.render('contact');
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


app.listen(PORT);   