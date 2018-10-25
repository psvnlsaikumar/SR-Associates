var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen((process.env.PORT || 8080,  function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  })).listen(process.env.PORT);