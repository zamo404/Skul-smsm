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

client.on('message', (message) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    if (!(message === null || message === void 0 ? void 0 : message.guild) || !(message === null || message === void 0 ? void 0 : message.member) || ((_a = message === null || message === void 0 ? void 0 : message.author) === null || _a === void 0 ? void 0 : _a.bot))
        return;
    if ((_c = (_b = message === null || message === void 0 ? void 0 : message.content) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.startsWith(`device`)) {
        const args = (_d = message === null || message === void 0 ? void 0 : message.content) === null || _d === void 0 ? void 0 : _d.split(' ');
        if (!args[1])
            return (_e = message === null || message === void 0 ? void 0 : message.channel) === null || _e === void 0 ? void 0 : _e.send('Enter the user you want to see his/her device!');
        args.shift();
        let device = '';
        const member = ((_g = (_f = message === null || message === void 0 ? void 0 : message.mentions) === null || _f === void 0 ? void 0 : _f.members) === null || _g === void 0 ? void 0 : _g.first()) ||
            ((_h = message === null || message === void 0 ? void 0 : message.guild) === null || _h === void 0 ? void 0 : _h.member(args.join(' '))) ||
            ((_l = (_k = (_j = message === null || message === void 0 ? void 0 : message.guild) === null || _j === void 0 ? void 0 : _j.members) === null || _k === void 0 ? void 0 : _k.cache) === null || _l === void 0 ? void 0 : _l.find((mem) => {
                var _a, _b;
                return ((_b = (_a = mem.user) === null || _a === void 0 ? void 0 : _a.username) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
                    (args === null || args === void 0 ? void 0 : args.join(' ').toLowerCase());
            })) ||
            ((_p = (_o = (_m = message === null || message === void 0 ? void 0 : message.guild) === null || _m === void 0 ? void 0 : _m.members) === null || _o === void 0 ? void 0 : _o.cache) === null || _p === void 0 ? void 0 : _p.find((mem) => {
                var _a, _b;
                return ((_b = (_a = mem === null || mem === void 0 ? void 0 : mem.user) === null || _a === void 0 ? void 0 : _a.tag) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
                    (args === null || args === void 0 ? void 0 : args.join(' ').toLowerCase());
            })) ||
            ((_s = (_r = (_q = message === null || message === void 0 ? void 0 : message.guild) === null || _q === void 0 ? void 0 : _q.members) === null || _r === void 0 ? void 0 : _r.cache) === null || _s === void 0 ? void 0 : _s.find((mem) => {
                var _a;
                return ((_a = mem.nickname) === null || _a === void 0 ? void 0 : _a.toLowerCase()) ===
                    (args === null || args === void 0 ? void 0 : args.join(' ').toLowerCase());
            }));
        if (!member)
            return (_t = message === null || message === void 0 ? void 0 : message.channel) === null || _t === void 0 ? void 0 : _t.send("Couldn't find that member!");
        if (((_u = member === null || member === void 0 ? void 0 : member.presence) === null || _u === void 0 ? void 0 : _u.status) === 'offline' ||
            !((_v = member === null || member === void 0 ? void 0 : member.presence) === null || _v === void 0 ? void 0 : _v.clientStatus))
            return (_w = message === null || message === void 0 ? void 0 : message.channel) === null || _w === void 0 ? void 0 : _w.send('This member is offline!');
        if ((_y = (_x = member === null || member === void 0 ? void 0 : member.presence) === null || _x === void 0 ? void 0 : _x.clientStatus) === null || _y === void 0 ? void 0 : _y.desktop)
            device = `${device} PC`;
        if ((_0 = (_z = member === null || member === void 0 ? void 0 : member.presence) === null || _z === void 0 ? void 0 : _z.clientStatus) === null || _0 === void 0 ? void 0 : _0.mobile)
            device = `${device} Mobile`;
        if ((_2 = (_1 = member === null || member === void 0 ? void 0 : member.presence) === null || _1 === void 0 ? void 0 : _1.clientStatus) === null || _2 === void 0 ? void 0 : _2.web)
            device = `${device} Browser`;
        (_3 = message === null || message === void 0 ? void 0 : message.channel) === null || _3 === void 0 ? void 0 : _3.send(`This member is using${device}`);
    }
});

//================================================================================\\



//================================================================================\\

client.on("message", message => {
  if (!message.content.startsWith()) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split("g")[0];
  command = command.slice(length);
  if (command === "g") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit('    **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 1000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 2000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 3000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 4000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <:slots2:421472583347732511> <:slots1:421472583410515969> <:slots3:421472582924238869>                                                                               `|         ||         |` ');
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});
//================================================================================\\

client.on("message", message => {
  if (!message.content.startsWith()) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(length);
  if (command === "m") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});


//================================================================================\\

client.on("message", async message => {
  if (message.content.startsWith("tinvites")) {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Server Command `");
 
    var invites = await message.guild.fetchInvites();
    invites = invites.array();
    invites, "uses", { reverse: true };
    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
    });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Top Invites.", `${possibleInvites}`);
 
    message.channel.send(embed);
  }
});


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
        .setColor("BLUE")
        .setDescription(`
 
**__About Bot__**
 
<:partner:891421834585714689> Servers **__${client.guilds.cache.size}__**
<:addmember:883032780865409054> Users **__${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},__**
<a:threads:871813387741433867> Channels **__${client.channels.cache.size}__**
<:news:891421920984178719> Owner Bot - <@349942964904001546>
<:members:891422824294662164> Admin Bot - <@!800994896890691605>
 
 
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