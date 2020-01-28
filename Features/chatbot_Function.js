exports.rollDice = (client, target, self) => {
  const sides = 6;
  const rolled = Math.floor(Math.random() * sides) + 1;
  client.say(target, `You rolled a ${rolled}`);
  return;
}
exports.playSong = (client, target, self) => {
  client.say(target,`current song is`);
  return;
}
//possible args for later use client, message, args, user, channel, self