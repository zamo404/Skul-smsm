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
  client.user.setActivity(`Jhelp|Prefix {J}|Verify Soon|Server,${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});
//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("898680185170325616").send(`
<:IconJoin:897811847305134122> **Join Server**: ${client.guilds.cache.size}
<:IconStatusWebOnline:897811847724531722> **Server Name**: ${guild.name}
<:IconCrown:897812868236455946> **Server Owner**: ${guild.owner}
<:IconID:897811847426756650> **Owner  Id**: ${guild.owner.id}
<:IconID:897811847426756650> **Server Id**: ${guild.id}
<:IconStaff:897811847728754718> **Member Count**: ${guild.memberCount}`);
});
////////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("898680185170325616").send(`
<:IconLeave:897811847682592799> **Lift Server**: ${client.guilds.cache.size}
<:IconStatusWebOnline:897811847724531722> **Server Name**: ${guild.name}
<:IconCrown:897812868236455946> **Server Owner**: ${guild.owner}
<:IconID:897811847426756650> **Owner Id**: ${guild.owner.id}
<:IconID:897811847426756650> **Server Id**: ${guild.id}
<:IconStaff:897811847728754718> **Member Count**: ${guild.memberCount}`);
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

client.on('message', message => {
if(message.content == 'Jmembers') {
const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
.setDescription(`**Member cases <:IconStatusWebOnline:897811847724531722>
<:729181184193462285:895398659389292625> Online ${message.guild.members.cache.filter(m=>m.presence.status == 'online').size}
<:729181212530442311:895398659217309737> Do Not Disturb ${message.guild.members.cache.filter(m=>m.presence.status == 'dnd').size}
<:729181121933475931:895398659284434945> Idle ${message.guild.members.cache.filter(m=>m.presence.status == 'idle').size}   
<:729181162182017051:895398658969862245> Offline ${message.guild.members.cache.filter(m=>m.presence.status == 'offline').size} 
<:IconStaff:897811847728754718> All ${message.guild.memberCount}**`)
message.channel.send(embed)

}
});

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

client.on("message", async(NotOurs) => {

 

  if (NotOurs.author.bot) return;

let devs = ["349942964904001546"];

  if (NotOurs.content.toLowerCase() === "Jlinks") {

      if(!devs.includes(NotOurs.author.id)){

    let embed = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setTitle("ليس لديك صلاحيات");

    NotOurs.channel.send(embed).then( z => z.delete({timeout:3000}));

 

  } 

    client.guilds.cache.forEach(g => {

 

      let l = g.id;

                g.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))

//g.channels.cache.get(g.channels.first().id)

        .createInvite({

          maxUses: 100,

          maxAge: 86400

        })

        .then(i =>

          NotOurs.channel.send(

        https://discord.gg${i.code}
          [ ${g.owner} ]

         

        )

        ); 

    

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
      .setAuthor("The Prefix { J }").setDescription(`

⚙️ ┇ **Info Commands**
> invite - uptime

:dollar: ┇**Economy Commands**
> daily(d) - cash(c) - work(w)
> send - steal - shop(h)

🎰 ┇**Game Comamnds**
> coinflip(cf) - slots(s)
> fish(f)

🔗 ┇**Link**
[Support](https://discord.gg/a9QvFY7te7) - [Invite Bot](https://discord.com/oauth2/authorize?client_id=518848646016401434&permissions=414464728128&scope=bot) -  [Vote](coming soon)
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
 
<:IconStatusWebOnline:897811847724531722> **Servers** - **__${client.guilds.cache.size}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:IconStaff:897811847728754718> **Users** - **__${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:828229201307369492:884402335319724062> **Channels** - **__${client.channels.cache.size}__**
✧･ﾟ: ✧･ﾟ: - :･ﾟ✧:･ﾟ
<:IconCrown:897812868236455946> **Owner Bot** - <@349942964904001546>
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
        client.channels.cache.get('898681102351335468').send("Hello Im Online <a:logserver:891321228537782313>")
        client.channels.cache.get('894710155994873886').join()
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

if(server.memberCount < 200){

server.leave()

console.log("Leave Server -200 member")

}

});
//====================================================//
client.login(process.env.TOKEN_BOT);