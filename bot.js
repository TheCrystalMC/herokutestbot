const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Nzg4OTc1NDIyMzQzNjEwMzkw.X9rUnw.doABDXg2YIkaBURjLpM-uJCkAOw);//BOT_TOKEN is the Client Secret
