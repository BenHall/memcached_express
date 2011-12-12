var memcache = require('memcache');

var client = undefined;
exports.connect = function() {
  client = new memcache.Client();
  client.connect();

  return client;
}

exports.get = function(key, callback) { client.get(key, callback); };
exports.set = function(key, value) { 
    client.set(key, value, function(error, result){}, 10);
};
