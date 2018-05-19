const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = ''

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Привет я БОТ!');
     }
});

client.login('Mzk4Mzk5NzUyMjcxODIyODQ4.DeF64A.-xStjU4VtMQEGYIfW1M68nnRdJM');