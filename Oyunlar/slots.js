const Discord = require('discord.js');
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
exports.run = function(client, message,  args) {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let miktar = args[0]
  let para = db.fetch(`para_${message.author.id}`)
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**slots** You Can't More Than <a:813505315534405632:884402335823069274> 50,000`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**slots**You Can't More Than <a:813505315534405632:884402335823069274> 50,000`))
  /////////////
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#ffff00")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' <a:813505315534405632:884402335823069274> there is!' : 'you have no money!'}`))
  /////////////////
  if(isNaN(miktar) || miktar < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:813505315534405632:884402335823069274> The amount you entered is not a valid number !?`))
 let kazandin = miktar*3   
  let slots = ["🍌","🍎","🍇","🍒","🍉","🍆"];
  //
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));

  //
  let ust1 = Math.floor((Math.random() * slots.length));
  let ust2 = Math.floor((Math.random() * slots.length));
  let ust3 = Math.floor((Math.random() * slots.length));

  //
  let alt1 = Math.floor((Math.random() * slots.length));
  let alt2 = Math.floor((Math.random() * slots.length));
  let alt3 = Math.floor((Math.random() * slots.length));
  
  
//===BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3] ) {
    var text2 = `**
    ___SLOTS___  
|                  |
|<a:872142091059355690:897456584727343174><a:872142091059355690:897456584727343174><a:872142091059355690:897456584727343174>|${message.author.username}
|                  |**`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**
    ___SLOTS___  
|                  |
|${slots[result1]}${slots[result2]}${slots[result3]}${message.author.username}<a:813847731285393439:884402358640066640> ${kazandin}+
|                  |**`,true);
            }, 3500);
          });

     db.add(`para_${message.author.id}`, kazandin)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
    var text3 = `**
    ___SLOTS___  
|                  |
|<a:872142091059355690:897456584727343174><a:872142091059355690:897456584727343174><a:872142091059355690:897456584727343174>|${message.author.username}
|                  |**`;
          message.channel.send(text3).then(msg => {
            setTimeout(() => {
              msg.edit(`**
    ___SLOTS___  
|                  |
|${slots[result1]}${slots[result2]}${slots[result3]}|${message.author.username}<a:870059060714700870:897458103681962074> ${miktar}-
|                  |**`, true);
            }, 3500);
          });
  db.add(`para_${message.author.id}`, -miktar)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  slowmode: 5,
  aliases: ["slot","s","slotmachine"],
  permLevel: 2
};

exports.help = {
  name: 'slots',
};
