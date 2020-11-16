const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);// CODE BY KAHRBAA 
});
app.listen(process.env.PORT);
setInterval(() => { // CODE BY KAHRBAA 
  http.get(`http://op-quran.glitch.me/`);
}, 280000);

//======================================[Const]======================================
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const ms = require("ms");// CODE BY KAHRBAA 
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const cmd = require("node-cmd");
const prefix = "*"; // البرافيكس
   const GUILDID = '745997515584831608'; // اي دي السيرفر  
   const CHANNELID = '777794212133339146'; // اي دي الروم
//======================================[Client]======================================
// CODE BY KAHRBAA 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("One Piece Clan Playing Quran 24h",{type: 'WATCHING'})
});
// CODE BY KAHRBAA 
const { Client } = require('discord.js');
const ytdl  = require('ytdl-core');// CODE BY KAHRBAA 
const url = 'https://www.youtube.com/watch?v=M6z0Qql4-qo'; // هنا فديو الخاص ب القرأن الكريم كامل // CODE BY KAHRBAA 


client.on('ready',async () => {
    console.log('تـم تشغيل القرأن الكريم');
    // CODE BY KAHRBAA 
    voiceStay(GUILDID, CHANNELID);
   function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('ـاكد انك حطط ايدي السيرفر');
    if(!channelid) throw new Error('تـاكد انك حطط ايدي الروم');

    let guild = client.guilds.get(guildid);
    const voiceChannel = guild.channels.get(channelid);;
    if (!voiceChannel) {
      return 
    }// CODE BY KAHRBAA 
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(url, { filter: 'audioonly' }); // CODE BY KAHRBAA 
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => { // CODE BY KAHRBAA  
          voiceChannel.leave();
          cmd.run("refresh")

        });
      });
  }
});


  
//======================================[Commands]======================================
  

client.on('message', message => {
    if(message.content === prefix + 'guild'){
            const millis = new Date().getTime() - message.member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild;
// CODE BY KAHRBAA 
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('GuidlOwner',message.guild.owner,true)// CODE BY KAHRBAA 
        .addField('Guild ID', message.guild.id,true)
        .addField('Guild MemberCount', `${message.guild.memberCount}`+` [Online : ${message.guild.members.filter(m=>m.presence.status == 'online').size}]`)
        .addField('Guild Channels',`\`🔊\` ${message.guild.channels.filter(m => m.type === 'text').size} | `+`\`#\`${message.guild.channels.filter(m => m.type === 'voice').size} `)
        .addField('Guild RolesCount',` ${message.guild.roles.size} `,true)
        .addField('Created',`\`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField('Guild Region',message.guild.region,true)
        // CODE BY KAHRBAA 
        
        message.channel.send(embed)
    }// CODE BY KAHRBAA 
})

client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {// CODE BY KAHRBAA 
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({// CODE BY KAHRBAA 
        embed: new Discord.RichEmbed()
            .setColor('BLACK')// CODE BY KAHRBAA 
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true)
            .addField('Prefix' , `[ ${prefix} ]` , true)
            
    })
}
});
      // CODE BY KAHRBAA 



client.login(process.env.BOT_TOKEN);
