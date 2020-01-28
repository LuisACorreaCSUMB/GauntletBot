const tmi = require('tmi.js');
/* need to figure out how to import other file functions to split features
 require('babel-register')({
    presets: ['env']
});
 */
// Define configuration options
const opts = {
    options:{
        debug: true
    },
  identity: {
    username: "GauntletBot10",
    password: "oauth:bxxr5c613l3mkl476orulnkq0gabck"
  },
  channels: [
    "onepocketpimp"
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Connect to Twitch:
client.connect();

// Register our event handlers (defined below)
client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);


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
        /*const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);*/
    }
    else if(commandName === '!playsong' || commandName === '!play') {
      try{
        let commandFile = require(`./Features/chatbot_Function.js`)
        commandFile.playSong(client, target, self);
      } catch (err){
        console.log(`${err}`);
        return;
      }
        //const song = play();
        //client.say(target, song);
        //console.log(`* testing ${commandName} command`);
    }
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
// Function called when the "dice" command is issued
/*function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
  }
function play (){
    return `current song is`;
}
*/
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);

}
function oAuthAuthorize () {
    //GET 'https://id.twitch.tv/oauth2/authorize?client_id=<your client ID>&redirect_uri=<your registered redirect URI>&response_type=token&scope=<space-separated list of scopes>'
}