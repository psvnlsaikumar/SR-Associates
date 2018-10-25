var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
// app.use('/assets', express.static(__dirname + 'assets'));
app.use(express.static("."));



app.listen((process.env.PORT || 8080,  function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  })).listen(process.env.PORT);