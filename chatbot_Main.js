const tmi = require('tmi.js');
const fetch = require('node-fetch');

require('dotenv').config()
/*
const opts = {
    options:{
        debug: (boolean- useful for building)
    },
  identity: {
    username: "(Account Username)",
    password: "oauth:(Insert OAUTH here)"
  },
  channels: [
    "(Desired Channel)"
  ]
};
*/
// Define configuration options
const opts = {
  options:{
      debug: process.env.BOT_OPTION
  },
identity: {
  username: process.env.BOT_USERNAME,
  password: process.env.BOT_OAUTH
},
channels: [
  process.env.BOT_CHANNEL
]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();
//Spotify Connect

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  const commandName = msg.trim();
  //checks if it is a command at all
  if (commandName.indexOf('!') != -1){
    // Remove whitespace from chat message
    // If the command is known, let's execute it
    if (commandName === '!dice') {
        try{
          let commandFile = require(`./Features/chatbot_Function.js`)
          commandFile.rollDice(client, target, self);
        } catch (err){
          console.log(`${err}`);
          return;
        }
    }
    else if(commandName === '!playsong' || commandName === '!play') {
      try{
        let commandFile = require(`./Features/chatbot_Function.js`)
        commandFile.playSong(client, target, self);
      } catch (err){
        console.log(`${err}`);
        return;
      }
    }
    //Test Command
    else if(commandName == '!spotifyConnect'){
      try{
        let commandFile = require(`./OAuth/api-request.js`)
        commandFile.connect();
        client.say(target, "Spotify Connected.")
      } catch (err){
        console.log(`${err}`);
        return;
      }
    }
    //Commands below are chat commands
    else if(commandName === '!clear'){
        client.say(target, "/clear");
        console.log(`clearing chat`);
    }
    else{
        console.log(`* Unknown command ${commandName}`);
    }
  }
  else{
    console.log(`Ignore this message ${commandName}`);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}