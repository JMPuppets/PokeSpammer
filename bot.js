const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '|spam') {
    	message.channel.send('|ooh i like spam');
  	}
});

client.on('message', message => {
    if (message.content === '|ooh i like spam') {
    	message.channel.send('|spam');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
