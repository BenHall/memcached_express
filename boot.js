var express = require('express');

exports.boot = function(app) {
  bootApplication(app);
  require('./routes').define(app);
}

function bootApplication(app) {
  // Configuration

  app.configure(function(){
      app.set('views', __dirname + '/views');
      app.set('view engine', 'jade');
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      app.use(app.router);
      app.use(express.static(__dirname + '/public'));
      });

  app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
      });

  app.configure('production', function(){
      app.use(express.errorHandler()); 
      });
};
