const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
module.exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 let user =  message.mentions.users.first()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
 if(!user) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`<a:Wrongs:902312437863309382> You have to tag the user whose money you want to steal!`))
  let targetuser = await db.fetch(`para_${user.id}`);
  let author     = await db.fetch(`çalma_${message.author.id}`);
  let author2    = await db.fetch(`para_${message.author.id}`);

  let timeout = 1200000;
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if (author !== null && timeout - (Date.now() - author) > 0) {
  let time = ms(timeout - (Date.now() - author));
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
     .setFiled(`<a:Wrongs:902312437863309382> To rob someone ${time.minutes ? time.minutes + ' minute,' : ''} ${time.seconds ? time.seconds + ' you have to wait seconds!' : 'try again!'}`);
    message.channel.send(timeEmbed)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`<a:Wrongs:902312437863309382> To steal money you need at least 200 💸 coins`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
var lostmoney = rastgeleMiktar(500,1000)
  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`<a:Wrongs:902312437863309382> Faqir you tried to rob someone and ${lostmoney} 💸 you were fined`);
  

  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
  if (targetuser <= 100) {
    return message.channel.send(moneyEmbed2),db.set(`çalma_${message.author.id}`, Date.now()),db.add(`para_$${message.author.id}`, -lostmoney)
db.set(`çalma_${message.author.id}`, Date.now())
db.add(`para_${message.author.id}`, -lostmoney)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`<a:897508783687892992:902407960708395018> You think me to undress yourself?!`);
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    let gotmoney = rastgeleMiktar(500,2500)

  let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
   .setDescription(`<a:rights:902312393474965604> Robbery Successful, ${user}'you robbed and ${gotmoney} <a:897507318122565733:902404122018476103> you won`)
   .setColor("GREEN")

   message.channel.send(embed)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    await db.add(`para_${user.id}`, -gotmoney);
await db.add(`para_${message.author.id}`, gotmoney);
await db.set(`çalma_${message.author.id}`, Date.now());
  
		}
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
}
exports.conf = {
  enabled: true,
  aliases: [],
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.help = {
  name: 'steal',
};
