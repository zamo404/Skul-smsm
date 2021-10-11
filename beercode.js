const discord = require("discord.js");
const fs = require("fs");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NTE4ODQ4NjQ2MDE2NDAxNDM0.XAQddA.nWbmk8-lKkoD6nxIa2nkVd0RIq0");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`>help |SMSM UP|Server,${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});//===============================================================================\\
client.on("message", message => {
  if (message.guild) return;
  if (message.author.bot) return;
  var channel = client.channels.cache.get("869140130387083264");
  if (!channel) return;
  var embed = new Discord.MessageEmbed()
    .setColor("#0000ff")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .addField(
      `✅ **New Suggestion**`,
      `\`\`\`
  ${message.content}\`\`\``
    )
    .setFooter(`${message.author.username}`)
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp();
  channel.send(embed).then(c => {
    c.react("").then(() => c.react(""));
  });
});
//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("870341021186265188").send(`
✅ **Join Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
////////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("870341021186265188").send(`
❎ **Lift Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
//================================================================================\\
client.on("message", message => {
  if (message.content === ">help") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("c6df00")
      .setAuthor("The Prefix { J}").setDescription(`
**<a:emoji_30:872142584875716689> ┇User Commands**
> bot - avatar - server
> invite - support - kick
> unlock - lock - role 
> clear - server 


**<:emoji_63:874713515502501960> ┇Economy Commands**
> daily(d) - cash(c) - work(w)
> send - steal - shop(h)


**<a:emoji_90:870361065786069012> ┇Game Comamnds**
> coinflip(cf) - slots(s)
> fish(f)


**<a:emoji_19:870357283006205953> ┇Gif Commands**
> anime - animel - boy
> girl - baby - coulpe
> smoking - sad - neon - emoji


**<:emoji_79:870361413644873798> ┇Photo Commands**
> pgirl - pboy - pemoji
> panime - pcoulpe


> **<:emoji_91:870360971825254470> ┇Link**
[Support]() - [Invite BOT](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot) - [YouTube](coming soon) - [Website](coming soon)
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", russi => {
  if (russi.content === ">server") {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${russi.guild.name}`) ///Russi
      .setThumbnail(client.user.avatarURL())
      .setColor("#ffff00") ///Russi
      .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
      .addField("> 🆔 ID Server :", `${russi.guild.id}`)
      .addField("> :crown: Owner Server :", `${russi.guild.owner}`)
      .addField(
        "> :calendar: Created : ",
        `${russi.guild.createdAt.toLocaleString()}`
      )
      .addField(
        "> <:emoji_87:870361195272630293> Members : ",
        `${russi.guild.memberCount}`
      )
      .addField(
        "> <:emoji_80:870361373895454800> Channels : ",
        `${russi.guild.channels.cache.size}`
      )
      .addField("> <a:emoji_17:875044896619266049> Region : ", `${russi.guild.region}`)
      .setTimestamp(); ///Russi
    russi.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", habdo => {
  if (habdo.content.startsWith(">kick")) {
    if (!habdo.guild) return;
    if (!habdo.member.hasPermission("KICK_MEMBERS"))
      return habdo.reply("**You don t have a ram**");
    let user = habdo.mentions.users.first();
    if (!user) return habdo.reply("**Kick A Member User**");
    habdo.guild.member(user).kick();
    habdo.channel.send(`**✈ \`${user}\` Kicked from the server.**`);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content.startsWith(">role")) {
    var roles = message.guild.roles.cache
      .map(roles => `${roles.name}, `)
      .join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .addField("**Roles Server:**", `**[${roles}]**`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", habdo => {
  if (habdo.content.startsWith(">avatar")) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(
        `${habdo.author.username}`,
        habdo.author.avatarURL({ dynamic: true })
      )
      .setColor("#ffff00")
      .setDescription(
        `**[Avatar Link](${habdo.author.avatarURL({
          dynamic: true,
          format: "png",
          size: 1024
        })})**`
      )
      .setImage(
        habdo.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setFooter(
        `Requsted by ${habdo.author.tag}`,
        habdo.author.avatarURL({ dynamic: true })
      );
    habdo.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === ">bot") {
    const embed = new Discord.MessageEmbed().setColor("#ffff00")
      .setDescription(`
> <a:emoji_21:872142528042917980> | Server
${client.guilds.cache.size}
> <a:emoji_21:872142528042917980> | Channel
${client.channels.cache.size}
> <a:emoji_21:872142528042917980> | User
${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
> <a:emoji_21:872142528042917980> | Owner Bot 
<@701546840063082601>
> <a:emoji_21:872142528042917980> | Prefix Bot
>`);
    message.channel.send(embed);
  }
});

//===============================================================================\\
client.on("message", async message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    let help = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setThumbnail(
        ``
      )
   .setAuthor(client.user.username, client.user.avatarURL()).setDescription(`
   
<a:emoji_21:872142528042917980> | Kraken Prefix (>)

      
<a:emoji_21:872142528042917980> | Kraken [Support](https://discord.gg/DxytuacsyS)

<a:emoji_21:872142528042917980> | Krakem [Invite](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot)

<a:emoji_21:872142528042917980> | Kraken [Website](coming soon)`);

    message.channel.send(help);
  }
});
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

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
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

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
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\
//===============================================================================\\
//===============================================================================\\
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
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

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
//====================================================//

