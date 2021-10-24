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
  client.user.setActivity(`Jhelp|Prefix {J}|To Verify|Server,${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});
//===============================================================================\\

client.on('message', message => {
  if (message.content.startsWith("bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle('``Info The Bot`` ')
        .addField('``My Ping``', `${Date.now() - message.createdTimestamp}` + 'MS', true)
        .addField('``servers``', [client.guilds.size], true)
        .addField('``channels``', ` ${client.channels.size} `, true)
        .addField('``Users``', ` ${client.users.size} `, true)
        .addField('``My Name``', ` ${client.user.tag} `, true)
        .addField('``My ID``', ` ${client.user.id} `, true)
        .addField('``My Prefix``', ` J `, true)
    })
  }
});

//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("898680185170325616").send(`
<:IconJoin:897811847305134122> **Join Server**: ${client.guilds.cache.size}
<:IconStatusWebOnline:897811847724531722> **Server Name**: ${guild.name}
<:IconCrown:897812868236455946> **Server Owner**: ${guild.owner}
<:IconID:897811847426756650> **Server Id**: ${guild.id}
<:IconStaff:897811847728754718> **Member Count**: ${guild.memberCount}**`);
});
////////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("898680185170325616").send(`
<:IconLeave:897811847682592799> **Lift Server**: ${client.guilds.cache.size}
<:IconStatusWebOnline:897811847724531722> **Server Name**: ${guild.name}
<:IconCrown:897812868236455946> **Server Owner**: ${guild.owner}
<:IconID:897811847426756650> **Server Id**: ${guild.id}
<:IconStaff:897811847728754718> **Member Count**: ${guild.memberCount}**`);
});
//================================================================================\\
 
client.on('message', async message => {
    var moment = require("moment");
    if (message.content.startsWith("user")) {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return message.channel.send(
            new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("❌" + ` **You Can't Use This Command In DM's!**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
        var args = message.content.split(" ").slice(1);
        let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1]);
        moment.locale('ar-TN');
        const db = require('quick.db')
        const flags = user.flags || await user.fetchFlags();
        await db.set(`${user.id}`, [])
        if (flags.toArray().includes('DISCORD_PARTNER')) db.push(`${user.id}`, "<:6714discordpartner:839529122467938375>")
        if (flags.toArray().includes('HYPESQUAD_EVENTS')) db.push(`${user.id}`, "<:hypesquadbadge:839529122472656977>");
        if (flags.toArray().includes('HOUSE_BRILLIANCE')) db.push(`${user.id}`, "<:briliance:839529152414744588>");
        if (flags.toArray().includes('HOUSE_BRAVERY')) db.push(`${user.id}`, "<:bravery:839529152071729192>");
        if (flags.toArray().includes('HOUSE_BALANCE')) db.push(`${user.id}`, "<:balance:839529122756952074>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_2')) db.push(`${user.id}`, "<:hunterlv2:839529122900475964>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_1')) db.push(`${user.id}`, "<:hunterlv1:839529122912010282>");
        if (flags.toArray().includes('EARLY_SUPPORTER')) db.push(`${user.id}`, "<:earlysupporter:839529152100565032>");
        if (flags.toArray().includes('VERIFIED_DEVELOPER')) db.push(`${user.id}`, "<:9developer:839529122878455848>");
        if (flags.toArray().includes('EARLY_VERIFIED_DEVELOPER')) db.push(`${user.id}`, "<:9developer:839529122878455848>");
        let nitro = user.avatarURL({ dynamic: true });
        if (nitro.includes('gif')) db.push(`${user.id}`, "<:nitro:839616875184783411>");
        var emojis = db.get(`${user.id}`);
        var statusFull;
        var status = user.presence.status;
        if (status.includes('dnd')) statusFull = '🔴 | DND';
        if (status.includes('offline')) statusFull = '⚫ | Offline';
        if (status.includes('online')) statusFull = '🟢 | Online';
        if (status.includes('idle')) statusFull = '🟡 | Idle';
        var bot = false;
        if (user.bot) bot = true;
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(user.username, user.avatarURL({ dynamic: true }))
            .setColor(message.member.displayHexColor)
            .addFields({
                name: "**Name:**",
                value: user.username,
                inline: true
            }, {
                name: "**Tag:**",
                value: '#' + user.discriminator,
                inline: true
            }, {
                name: "**Id:**",
                value: user.id,
                inline: true
            }, {
                name: "**Badge:**",
                value: emojis,
                inline: true
            }, {
                name: "**User Presence:**",
                value: statusFull,
                inline: true
            }, {
                name: "**Bot:**",
                value: bot,
                inline: true
            }, {
                name: "**Joined Discord:**",
                value: `${moment(user.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(user.createdTimestamp).fromNow()}\``,
                inline: true
            }, {
                name: "**Joined Server:**",
                value: `${moment(user.joinedAt).format('YYYY/M/D')} \n \`${moment(user.joinedAt).fromNow()}\``,
                inline: true
            })
            .setThumbnail(user.avatarURL({
                dynamic: true,
                format: 'png',
                size: 1024
            }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
    }
})

//================================================================================\\
client.on("message", message => {
  if (message.content === ";invite") {
    let embed = new Discord.MessageEmbed()
    .setColor("")
    .setTitle("Invite the bot!")
    .setDescription(`[invite]()`)
    message.channel.send(embed);
  }
});
//================================================================================\\



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

if(server.memberCount < 100){

server.leave()

console.log("Leave Server -100 member")

}

});
//====================================================//

client.login(process.env.TOKEN_BOT);