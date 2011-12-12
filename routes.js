exports.define = function(app) { 
  root(app);
};

function root(app) {
  function microtime() {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now);
    return (Math.round((now - s) * 1000) / 1000) + ' ' + s;
  }

  app.get('/', function(req, res){
      res.render('index', {title: "Hello Express at " + microtime()});
  }); 
};
