const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
  let timeout = 7000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("#ffff00")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`<a:813403485902864435:884402355301412864> You Have A Cooldown For __coinflip__
                        **Time left**
                        ${time.seconds ? time.seconds + 'seconds' : 'try again!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#ffff00")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You Can't More Than<:867523675304624148:897510785427857410> 50,000`))
 if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#ffff00")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You can bet up to 50000 <a:874712610396844135:897507318122565733>!`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("#ffff00")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' <a:874712610396844135:897507318122565733> there is!' : 'you have no money!'}`))
        const result = [
          "LOOSELOOSE",
          "WINWIN",
          "LOSSELOSSE",
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar*2        
        //////        
        var text2 = `**<@${message.author.id}> CoinFlip <a:854073741520666644:897455060928323585> Choice win Or Lost**`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**<@${message.author.id}>spent cowoncy ${-kaybettin} <:897511163456258048:897515669573214229> and chose heads
The coin spins... :coin: tail and you lost it all...loose (loose)**`);
            }, 3000);
          });
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
      } else { 

          var kazandın = miktar*2
        var text2 = `**<@${message.author.id}> CoinFlip <a:854073741520666644:897455060928323585> Choice win Or Lost**`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**<@${message.author.id}> spent cowoncy ${kazandın} <:897459755361120326:897515990173241364> and chose heads
The coin spins... :coin: coinflip win (win)**`);
            }, 3000);
          });
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);    

        }}}
exports.conf = {
  enabled: true,
  aliases: ["coinflip","cf"],
};

exports.help = {
  name: 'cf',
};
