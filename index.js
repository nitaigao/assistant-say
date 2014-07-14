var settings = require('env-settings'),
    request  = require('request');

module.exports.message = function(message) {
  console.log("Saying " + message);
  request.get(settings.say + "?say=" + message, function(err) {
    console.log("Failed to send say: " + message)
  })
}
