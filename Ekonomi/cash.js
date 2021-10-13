const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author
  let para = `${db.fetch(`para_${user.id}`)}`
  console.log(para)
  if (!para) para = 0;
  let banka = `${db.fetch(`bankapara_${user.id}`)}`
  console.log(banka)
  if (!banka) banka = 0;
  let toplam = para + banka;
  console.log(toplam.replace(/(\d)(?=(\d{3})+(\D|$))=/g, '$1'))
  console.log(para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
  console.log(banka.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
  );
  let balanceEmbed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({dynamic: true}))
    .setDescription(`**__Jungle Cash \💰__**\n**💵 | Balance : ${para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}\n🏧 | Bank: ${banka.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} \n📊 | total: ${toplam.replace(/(\d)(?=(\d{3})+(\D|$))=/g, '$1 ')}**`)
    .setColor("RANDOM")
    .setThumbnail('https://i.pinimg.com/originals/5b/ad/f7/5badf72a895a0a9d6ff371ef364d56af.gif')
    .setFooter('💰 Balance Info!');
  message.channel.send(balanceEmbed);
}

exports.conf = {
  enabled: true,
  aliases: ["cash", "money", 'balance',"CASH", 'c'],
};
exports.help = {
  name: 'balance',
};