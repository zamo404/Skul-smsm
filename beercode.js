const discord = require("discord.js");
const fs = require("fs");
//===============================================================================\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login("");
//===============================================================================\\
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`Jhelp|Under Development|Server,${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});
//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("903938570249711656").send(`
<:join:902312806618116096> **Join Server**: ${client.guilds.cache.size}
<:Servers:902312906618724372> **Server Name**: ${guild.name}
<:owner:902312748371820594> **Server Owner**: ${guild.owner}
<:iduser:902312780009459733> **Server Id**: ${guild.id}
<:Users:902312879838068796> **Member Count**: ${guild.memberCount}`);
});
////////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("903938570249711656").send(`
<:left:902312846963114034> **Lift Server**: ${client.guilds.cache.size}
<:Servers:902312906618724372> **Server Name**: ${guild.name}
<:owner:902312748371820594> **Server Owner**: ${guild.owner}
<:iduser:902312780009459733> **Server Id**: ${guild.id}
<:Users:902312879838068796> **Member Count**: ${guild.memberCount}`);
});

//================================================================================\\

client.on('message' , message => {
  if (message.content === "Jinvite") {

        if(!message.channel.guild) return message.reply('**this command only for server**');

     const embed = new Discord.MessageEmbed()

 .setColor("RANDOM")

 .setThumbnail(client.user.avatarURL("https://cdn.discordapp.com/icons/838113441008058388/a_a227ea131a1fc6b0d6d58925b6c3e2e6.gif?size=1024"))     
 .setDescription("Invite Bot" + `
 
[Link Invite](https://discord.com/oauth2/authorize?client_id=518848646016401434&permissions=414464728128&scope=bot)
`);

  message.channel.send({embed});

   }

});
//================================================================================\\
client.on('message' , message => {
  if (message.content === "Jsupport") {

        if(!message.channel.guild) return message.reply('**this command only for server**');

     const embed = new Discord.MessageEmbed()

 .setColor("RANDOM")

 .setThumbnail(client.user.avatarURL("https://cdn.discordapp.com/icons/838113441008058388/a_a227ea131a1fc6b0d6d58925b6c3e2e6.gif?size=1024"))     
 .setDescription("Support Server" + `
 
[Link Server](https://discord.gg/a9QvFY7te7)
`);

  message.channel.send({embed});

   }

});
//================================================================================\\
client.on('message',async message => {
  if(message.content.startsWith("Juptime")) { 
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
 
    return message.channel.send(`__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
 
})
//================================================================================\\



//================================================================================\\

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("Jping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

//================================================================================\\

client.on(`message`, message => {
    if (message.content.startsWith("Jserver")) {
        if (!message.channel.guild) return message.channel.send('This is for servers only');
 
        const text = message.guild.channels.cache.filter(r => r.type === "text").size
        const voice = message.guild.channels.cache.filter(r => r.type === "voice").size
        const chs = message.guild.channels.cache.size
        const avaibles = message.guild.features.map(features => features.toString()).join("\n")
 
        const roles = message.guild.roles.cache.size
 
        const online = message.guild.members.cache.filter(m =>
            m.presence.status === 'online'
        ).size
 
        const idle = message.guild.members.cache.filter(m =>
            m.presence.status === 'idle'
        ).size
 
        const offline = message.guild.members.cache.filter(m =>
            m.presence.status === 'offline'
        ).size
 
        const dnd = message.guild.members.cache.filter(m =>
            m.presence.status === 'dnd'
        ).size
 
        const black = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setColor('BLACK')
            .addFields({
                name: `🆔 Server ID`,
                value: `${message.guild.id}`,
                inline: true
 
            }, {
                name: `📆 Created On`,
                value: moment(message.guild.createdAt).format("YYYY/MM/DD, HH:mm") + '\n' + moment(message.guild.createdAt, "YYYYMMDD").fromNow(),
                inline: true
            }, {
                name: `👑 Owner By`,
                value: `${message.guild.owner}`,
                inline: true
 
            }, {
                name: `👥 Members (${message.guild.memberCount})`,
                value: `**${online}** Online \n **${message.guild.premiumSubscriptionCount}** Boosts ✨`,
                inline: true
            }, {
                name: `💬 Channels (${chs})`,
                value: `**${text}** Text | **${voice}** Voice`,
                inline: true
            }, {
                name: `🌍 Others`,
                value: `**Region:** ${message.guild.region}\n**Verification Level:** ${message.guild.mfaLevel}`,
                inline: true
            }, {
                name: `🔐 Roles (${roles})`,
                value: `To see a list with all roles use #roles`,
                inline: true
            }, )
            .setFooter('Developer Support', message.author.avatarURL())
        message.channel.send(black)
    }
});

//================================================================================\\


//================================================================================\\

client.on('guildCreate', guild => {
var embed = new Discord.RichEmbed()
  .setColor("WHITE")
  .setDescription(`
> Thank you for adding me 
> My Prefix : \`J\`
> For Help type : \`Jhelp\``)
      guild.owner.send(embed)
});

//================================================================================\\



//================================================================================\\


client.on("message", message => {
  if (message.content === "Jhelp") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("WHITE")
      .setAuthor("The Prefix Bot is { J }").setDescription(`

ℹ️ ┇ **Info Commands**
> **Juptime** - **Jabout** - **Jserver**
> **Jinvite** - **Jsupport** - **Jping**
:dollar: ┇**Economy Commands**
> **Jdaily** - **Jcash** - **Jwork** - **Jrob**
> **Jsend** - **Jsteal** - **Jshop** - **Jshop**
> **Jdep** - **Jcheck** - **Jsteal** 
:game_die: ┇**Game Comamnds**
> **Jcoinflip(cf)** - **Jslots(s)** - **Jfish(f)**
:books: **If you don't know how to use a bot or game Commands type (**__Jhowplay__**)**
🔗 ┇**Link**
[Support](https://discord.gg/a9QvFY7te7) - [Invite Bot](https://discord.com/oauth2/authorize?client_id=518848646016401434&permissions=414464728128&scope=bot)-[Vote](https://top.gg/bot/518848646016401434/vote)
`);
    message.channel.send(embed);
  }
});
//================================================================================\\
client.on('message', message => {
    if(message.content === "Jabout") {
        const embed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`
 
**__About Bot__**
 
<:Servers:902312906618724372> **Servers** - **__${client.guilds.cache.size}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:Users:902312879838068796> **Users** - **__${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:channels:895398664468594739> **Channels** - **__${client.channels.cache.size}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:owner:902312748371820594> **Owner Bot** - <@349942964904001546>
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:Devloper:902181949110636574> **Admin Bot** - <@800994896890691605>

`)
               message.channel.send(embed);
           }
});
//===============================================================================\\
client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Hi Im <@518848646016401434> My prefix is { J }`);
  }
});
//===============================================================================\\
client.on('ready', async() => {
        client.channels.cache.get('903900364363956235').send("Hello Im Online <a:logserver:891321228537782313>")
        client.channels.cache.get('903910230444871680').join()
        console.log("Hello Im Online")
});
//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
   

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Destek/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Ekonomi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//===============================================================================\\


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Oyunlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Game command Loading ...`);
  files.forEach(f => {
    let props = require(`./Oyunlar/${f}`);
    log(`Game Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//===============================================================================\\
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Oyunlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("guildCreate" , server => {

if(server.memberCount < 0){

server.leave()

console.log("Leave Server -0 member")

}

});
//====================================================//
client.login(process.env.TOKEN_BOT);