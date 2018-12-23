const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const first = require('first');
const fs = require('fs');
const prefix = "";
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
client.user.setActivity("Power Best.",{type: "Streaming"})
});


client.on('ready', () => {
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });


let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "#antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        //antihack with ON , OFF ! RARE CODE
        //LIKE PLUSBOT !
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "#antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
client.on("guildMemberAdd", member => {
                if(!antibots[member.guild.id]) antibots[member.guild.id] = {
          onoff: 'Off'
        }
                if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
})
            
 




client.on("message",(message) => {
    if(message.content.startsWith(prefix + "antihack")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.createChannel("log-power").then(c => {
            c.setPosition(1);
            temp[message.guild.id].channel = c.id
            message.channel.send("** Done I Created Channel Named hack-log To Start The AntiHack**");
        });
	       }})
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log-power"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log-power"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log-power"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });



client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "log-power")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
        msg.channel.bulkDelete(1000).then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
    
















client.on('message',function(message) {
  if(!message.channel.guild) return;
    if (message.content === prefix + "discrim") {
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);

if (message.author.bot) return;

var discri = args[0]
let discrim
if(discri){
discrim = discri;
}else{
discrim = message.author.discriminator;
}
if(discrim.length == 1){
discrim = "000"+discrim
}
if(discrim.length == 2){
discrim = "00"+discrim
}
if(discrim.length == 3){
discrim = "0"+discrim
}

const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
return message.channel.send(`
**Found ${users.length} users with the discriminator #${discrim}**
${users.join('\n')}
`);
}
});


   client.on('message', message =>{

    if(message.content === '#ping'){

let start = Date.now(); message.channel.send('pong').then(message => { 

message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);

    });

    }

});       
 
        
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    
   let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
}).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});

client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Power.'));
});
 
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يوم استخدامات الرابط : 1
**`)


    }
});

  
  
  
 

  

  






 


    








  


  

 




 







 



  

  






  

 



  






  

  
          

client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "511595465058549761") return;
            
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });


 
  









   

 

    


 
  
        


      

      


client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**تم اعطائك ميوت بسبب النشر**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت بشات بسبب نشر سيرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})






 


client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
 
  
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  
 
 client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'الوان'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});
 
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":information_source:  ``#kick @NAWAF`` يجب تحديد شخص ");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});  
    
       const Jimp = require('jimp');
client.on('message', message => {
	if (message.content.startsWith(`ship`)) {
        let replies = [`Will Never Work`, `Slight Chance of Working`, `👀`, `Can Work`, `Could Work`, `High Chance of Working`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        var imagetobase = `https://cdn.discordapp.com/attachments/470109023807602699/471821113261817866/Shipping.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(60)
                    mydude.print(font, 635, 1717, `${message.author.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write("saveme.jpg")
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                        if (err) return err;
                        message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] })
                        message.channel.send(replies[result])
                        message.channel.send(`MADE BY COLONIAL#1923`)
                    });
                });
            });}
        )});
    };
})






              
    






  
 

 
    




 client.on('message', message => {

    var prefix = "";

if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'اسحب')) {

 if (message.member.hasPermission("MOVE_MEMBERS")) {

 if (message.mentions.users.size === 0) {

 return message.channel.send("" +prefix+ "** ❌  لم يتم العثور على العضو المطلوب **").then(msg => msg.delete(5000));

}

if (message.member.voiceChannel != null) {

 if (message.mentions.members.first().voiceChannel != null) {

 var authorchannel = message.member.voiceChannelID;

 var usermentioned = message.mentions.members.first().id;

  let mentions = message.mentions.members.first();

message.channel.send(`✅ ${mentions.user} **moved to** \`${message.member.voiceChannel.name}\``);

 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))


} else {

message.channel.send("** ❌  العضو يجب أن يكون متواجد بروم صوتي **").then(msg => msg.delete(5000));

}

} else {

 message.channel.send("** ❌  You must be in voice channel !**").then(msg => msg.delete(5000));

}

} else {


 }}});     

 

 client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`**Welcome To Server Power**`)

}).catch(console.error)

})

 

 
client.on('message', function(message) {//by turkyKSA12

    if(!message.channel.guild) return;

if(message.content ===  '##bkpp 140') {

if(message.member.hasPermission('MANAGE_ROLES')) {

setInterval(function(){})

message.channel.send('جاري عمل الالوان |✅')

}else{

message.channel.send('ما معاك البرمشن المطلوب  |❌')

}

}

});

client.on('message', message=>{

if (message.content ===  '##bcxg 14vv0'){

if(!message.channel.guild) return;

if (message.member.hasPermission('MANAGE_ROLES')){

  setInterval(function(){})

    let count = 0;

    let ecount = 0;

for(let x = 1; x < 141; x++){

message.guild.createRole({name:x,

color: 'RANDOM'})

}

}

}

});




client.on('message', message => {

            if (message.content === 'الوان') {

              message.channel.send('');

              message.channel.sendFile("https://cdn.discordapp.com/attachments/511595465058549761/515538025149890570/colors.png");

               



            }

});







const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(10000);

  client.guilds.forEach(g => {

    g.fetchInvites().then(guildInvites => {

      invites[g.id] = guildInvites;

    });

  });

});

client.on('guildMemberAdd', member => {

  member.guild.fetchInvites().then(guildInvites => {

    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const inviter = client.users.get(invite.inviter.id);

    const logChannel = member.guild.channels.find(channel => channel.name === "power");

    logChannel.send(`تم دعوته بواسطة: <@${inviter.id}>`);

  });

});

var userData = {};
client.on("message", function(message){
if (message.content.startsWith("#rank")) {
    if (!userData[message.author.id]) {
        userData[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }

    
    var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
    if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
    let pEmbed = new Discord.RichEmbed()
    .setColor("Random")
    .addField("» UserName :", message.author.tag)
    .addField("» Level :", userData[message.author.id].Level)
    .addField("» XP :",Math.floor(userData[message.author.id].Xp))
    message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
    userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }

userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});



client.on('message',async message => {
  if(message.channel.type === '511595465058549761') return;
  if(message.content.startsWith(prefix + "#id")) {
    let newID = new Discord.RichEmbed()
    .setAuthor(`Userinfo.`, message.author.avatarURL)
    .setTitle(`• ${client.user.tag}`)
    .setThumbnail(client.user.avatarURL)
    .addField('• iD', `${client.user.id}`,true)
    .addField('• Nickname', `${client.nickname || 'None'}`,true)
    .addField('• Status', `${client.status.toUpperCase()}`,true)
    .addField('• Joined Discord', `${client.user.createdAt.toLocaleString()}`,true)
    .addField('• Joined Server', `${client.joinedAt.toLocaleString()}`,true)
    .addField('• Roles', `\`${client.roles.map(a => a.name).join('\n')}\``,true)
    .addField('• VoiceChannel', `${client.voiceChannel.name || 'None'}`,true);

    message.channel.send(newID);
  }
});






    
const adminprefix = "#";

const devs = ['','283355378811666435'];

client.on('message', message => {

  var argresult = message.content.split(` `).slice(1).join(' ');

    if (!devs.includes(message.author.id)) return;

    

if (message.content.startsWith(adminprefix + 'بلاي')) {

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'نيم')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'افتار')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'ستريم')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});



client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#obc')){
if(!message.author.id === '283355378811666435') return;
message.channel.sendMessage('جاري آلآرسآل')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



var ss = 0;

 

client.on('voiceStateUpdate', (o,n) => {

    if (o.voiceChannel && !n.voiceChannel) {

        ss-=1

        n.guild.channels.get("500589857052295169").edit({

            name : "onPower: " + ss+ ""

        })

    };

    if (n.voiceChannel && !o.voiceChannel) {

        ss+=1

        n.guild.channels.get("500589857052295169").edit({

            name : "onPower : " + ss+ ""

        })

    }

})

client.on("ready", () => {

    client.guilds.get("457949142053027850").members.forEach(m => {

        if (m.voiceChannel) {

            ss+=1

        };

        client.channels.get("500589857052295169").edit({

            name : "onPower : " + ss+ ""

        })

    });

    client.user.setGame("#Power Best.", "https://twitch.tv/©");

});







client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var prefix = '#'; //<==== تقدر تغير البرفكس
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
 
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed() // حقوق الفا كودز
        .setTitle(':white_check_mark: Role Command.')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = args[2];
        }else if(!userM && args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = args[3];
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!args[2]) return message.channel.send(`**Useage:** ${prefix}role <USER> \`\`<ROLE>\`\``);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` From any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
 
          if(message.guild.member(userM.user).roles.has(getRole.id)) {
              message.guild.member(userM.user).removeRole(getRole.id);
              message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
          }else if(!message.guild.member(userM.user).roles.has(getRole.id)) {
              message.guild.member(userM.user).addRole(getRole.id);
              message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
          }
      }else if(args[1] === 'humans') {
          let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.') // حقوق الفا كودز
          .setColor('GREEN')
          .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs);
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
              .setColor('RED')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveHim, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                              message.guild.member(m).addRole(getRole.id) // حقوق الفا كودز
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
              .setColor('RED') // حقوق الفا كودز
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                              message.guild.member(m).removeRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                          });
                      }); // حقوق الفا كودز
                  });
                  dontRemove.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }
      }else if(args[1] === 'bots') {
      let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.')
          .setColor('GREEN')
          .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كودز
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
              let botsSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
              .setColor('RED')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(botsSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveHim, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 }); // حقوق الفا كودز
 
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                          message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                              message.guild.member(b).addRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  }); // حقوق الفا كودز
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
              if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
              .setColor('RED')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                          message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                              message.guild.member(b).removeRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                          });
                      });
                  });
                  dontRemove.on('collect', r => { // حقوق الفا كودز
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }
      }else if(args[1] === 'all') {
          let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.')
          .setColor('GREEN') // حقوق الفا كودز
          .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs);
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
              let allSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
              .setColor('RED')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(allSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveAll, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
// حقوق الفا كودز
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                              message.guild.member(m).addRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
              let allSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
              .setColor('RED')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(allSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                              message.guild.member(m).removeRole(getRole.id);
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                          });
                      }); // حقوق الفا كودز
                  });
                  dontRemove.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          } // حقوق الفا كودز
      }
  } // حقوق الفا كودز
});






client.on('message',async message => {
  if(message.author.bot || message.channel.type === '#bc') return;
  let args = message.content.split(' ');
  if(args[0] === `#bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('# **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});






 
const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "تكلم") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});
 
 
client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "اسكت") {
           
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   }
});




const sWlc = {}
const premium = ['429972030092476437', '457949142053027850', '', '']
client.on('message', message => {
var prefix = "##";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
 
      const w = ['./w1.png'];
 
      let Image = Canvas.Image,
         canvas = new Canvas(400, 200),
         ctx = canvas.getContext('2d');
     fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
         if (err) return console.log(err);
         let BG = Canvas.Image;
         let ground = new Image;
         ground.src = Background;
         ctx.drawImage(ground, 0, 0, 400, 200);
         
     
 
             let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
             jimp.read(url, (err, ava) => {
                 if (err) return console.log(err);
                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                     if (err) return console.log(err);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(`Welcome To ${member.guild.name}`, 300, 130);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(member.user.username, 200, 150);
 
             let Avatar = Canvas.Image;
                           let ava = new Avatar;
                           ava.src = buf;
                           ctx.beginPath();
                           ctx.arc(77, 101, 62, 0, Math.PI*2);
                           ctx.stroke();
                              ctx.clip();
                              ctx.drawImage(ava, 13, 38, 128, 126);  
                     
           
         
    welcomer.sendFile(canvas.toBuffer())
 
 
});
             }
             )}
             )}
            })





            










client.login(process.env.BOT_TOKEN);
