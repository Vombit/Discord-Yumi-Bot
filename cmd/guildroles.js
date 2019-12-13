const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot, message, args) => {
    if(message.guild.region === 'russia') lang = rus;
    let embed = new Discord.RichEmbed()
    .setColor('000')
    .addField(`${lang.grols.countr}:`,message.guild.roles.size)
    .addField(`${lang.grols.namer}:`,message.guild.roles.array())
    .setFooter(message.author.tag, message.author.displayAvatarURL);

    bot.send(embed);
};
module.exports.help = {
    name: 'guildroles',
    aliases: [""],
    description: "Все роли гильдии",
    usage: ".guildroles",
    noalias: "No Aliases",
    accessible: "",
    enabled: true

}