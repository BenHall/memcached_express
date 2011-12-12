exports.define = function(app) { 
  app.get('/', function(req, res){
      res.render('index', {title: "Hello Express"});
  }); 
};

