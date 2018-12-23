const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const first = require('first');
const fs = require('fs');
const prefix = "#";
client.on('ready', () => {

  console.log('╔[════════════════════════════════════]╗');   

  console.log('')

  console.log('            ╔[════════════]╗')

  console.log('              Bot vvvv اونلاين')
    
  console.log('            ╚[════════ ════]╝')
  console.log('')

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log('')

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log('')

  console.log('╚[════════════════════════════════════]╝')

});

client.on('ready', () => {
client.user.setActivity("MARCOS.",{type: "Streaming"})
});




client.login(process.env.BOT_TOKEN);
