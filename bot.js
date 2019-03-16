const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '|spam') {
    	message.channel.send('spam');
  	}
});

client.on('message', message => {
    if (message.content === '+') {
    	message.channel.send('');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
