const Discord = require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot, message, args) => {
  if(message.guild.region === 'russia') lang = rus;
  var user = message.guild.members.random();
    let random = new Discord.RichEmbed()
    .setColor("#11FF00")
    .setDescription(`**${lang.manage.user}: ${user.user}**\n**ID ${lang.manage.userf}:**${user.id}`)
         bot.send(random)
}
module.exports.help = {
  name: "random",
  aliases: [""],
  description: "Выбор случайного пользователя",
  usage: ".random",
  noalias: "No Aliases",
  accessible: "",
  enabled: true
}