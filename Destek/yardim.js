const Discord = require('discord.js')
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle("SKULL | Command List")
.setColor("#ffff00")
.addField("__💰  Economy__",`
**\`Jdaily\` - __You will earn between 3000-5000 with 24 hours intervals.__**
**\`money\` - __You will see the person you tagged or your own money.__**
**\`send\` - __You send money to the user you tagged.__**
**\`rob\` - __You make a robbery every 14 minutes.__**
**\`Work\` - __You work at a random job and get a salary.__**
**\`dep\` - __You deposit money into the bank from your own wallet.__**
**\`check\` - __You withdraw money from the bank to your own wallet.**
**\`steal\` - __You steal money from the wallet of the person you tagged.__**
`)
.addField("__🎲  Games__",`
**\`coinflip\` - __You bet, lose money or win twice.__**
**\`slots\` - __You play slots, lose money or win double.__**
**\`fish\` - __You fish, you win or lose money randomly.__**
`)
let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰 Economy Commands__")
.setColor("#ffff00")
.setDescription(`
**\`daily\` - __You will earn between 2300-2700 with 24 hours intervals.__**
**\`money\` - __You will see the person you tagged or your own money.__**
**\`send\` - __You send money to the user you tagged.__**
**\`rob\` - __You make a robbery every 14 minutes.__**
**\`Work\` - __You work at a random job and get a salary.__**
**\`dep\` - __You deposit money into the bank from your own wallet.__**
**\`check\` - __You withdraw money from the bank to your own wallet.**
**\`steal\` - __You steal money from the wallet of the person you tagged.__**
[Our Support Server](https://discord.gg/ZBBpmWJtey)
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Game Commands__")
.setColor("#ffff00")
.setDescription(`
**\`coinflip\` - __You bet, lose money or win twice.__**
**\`slots\` - __You play slots, lose money or win double.__**
**\`fish\` - __You fish, you win or lose money randomly.__** 
`)//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Support Commands__")
.setColor("BLUE")

  if(!args[0]) return message.channel.send(yardim)
  
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\  
  if(args[0] === 'economy' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'games' || args[0] === 'game' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  
  
};

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
    enabled: true, 
    aliases: ["games","hp",'game','howplay','Howplay'],
  };
  
  exports.help = {
    name: 'kue'
  };