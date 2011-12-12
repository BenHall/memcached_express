var express = require('express');
var cache = require('./cache');

var app = module.exports = express.createServer();
require('./boot').boot(app);

app.listen(3000);
cache.connect();
  
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
