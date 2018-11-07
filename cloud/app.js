/*
* Advanced Cloud Code Example
*/

var express = require('express');
var app = express();
var ParseServer = require('parse-server').ParseServer;

app.get('/hello-advanced', function (req, res)
{
  res.send("Hello from SashiDo's Advanced Cloud Code");
});

app.get('/people/:name', function(req, res) {
  const name = req.params.name || '';

  let query = new Parse.Query('People');
  query.equalTo('name', name);
  let subscription = query.subscribe();
  subscription.on('create', (err, people) => {
    console.log('subscription.on')
    if (err) {
      throw err;
    }
    // This should output ${req.params.name}
    console.log(people.get('name')); 
  });

  res.send({})
});

app.get('/create', function(req, res) {
  const GameScore = Parse.Object.extend("GameScore");
  const gameScore = new GameScore();

  gameScore.set("score", 1337);
  gameScore.set("playerName", "Sean Plott");
  gameScore.set("cheatMode", false);

  gameScore.save()
  .then((gameScore) => {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  });
});

/*
* Exporting of module.exports.app is required.
* we mount it automaticaly to the Parse Server Deployment.
*/

module.exports = app
