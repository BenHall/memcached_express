var memcache = require('memcache');

exports.define = function(app) { 
  root(app);
};

function root(app) {
  function microtime() {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now);
    return (Math.round((now - s) * 1000) / 1000) + ' ' + s;
  }

  function cache(key, value) {
    client.set(key, value, function(error, result){}, 10);
  }

  app.get('/', function(req, res){
    client.get('key', function(error, result){ 
      console.log(result);

      if(result == null)  {
        result = microtime();
        cache('key', result);
      }

      res.render('index', {title: "Hello Express at " + result});
    });
  }); 


  var client = new memcache.Client();
  client.connect();
  
};
