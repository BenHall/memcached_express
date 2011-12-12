var cache = require('./cache');

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
    cache.get('key', function(error, result){ 
      console.log(result);

      if(result == null)  {
        result = microtime();
        cache.set('key', result);
      }

      res.render('index', {title: "Hello Express at " + result});
    });
  }); 
};
