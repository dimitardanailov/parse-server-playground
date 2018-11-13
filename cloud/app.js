/*
* Advanced Cloud Code Example
*/

const express = require('express');
const app = express();
const ParseServer = require('parse-server').ParseServer;
const Monster = require('./models/Monster');
const GameScore = require('./models/GameScore');

app.get('/hello-advanced', function (req, res)
{
  res.send({response: "Hello from SashiDo's Advanced Cloud Code"});
});

app.get('/gamescore/subscription', function(req, res) {
  const name = req.params.name || '';

  let query = new Parse.Query('GameScore');
  query.equalTo('score', 1337);
  let subscription = query.subscribe();
  subscription.on('create', (score) => {
    // This should output ${req.params.name}
    console.log(score.get('playerName')); 

    res.send({'name': score.get('playerName')})
  });
});

app.get('/gamescore/create', async (req, res) => {
  console.log('here');
  const gameScore = GameScore.createGameScore({
    score: 1337,
    playerName: "Sean Plott",
    cheatMode: false,
    skills: ["pwnage", "flying"]
  });

  await gameScore.save();

  // res.send(gameScore);
});

app.get('/monsters/create', async (req, res) => {
  const monster = Monster.spawn(100);

  await monster.save();

  res.send(monster)
});

/*
* Exporting of module.exports.app is required.
* we mount it automaticaly to the Parse Server Deployment.
*/

module.exports = app
