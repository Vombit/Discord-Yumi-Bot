const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;

    let a = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setDescription(`${lang.useri.info}`)
    .setColor('#10c7e2')
    .addField(`${lang.useri.name}:`,a.username, true)
    .addField("ID",a.id, true)
    .addField(`${lang.useri.discr}:`,a.discriminator, true)
    .addField(`${lang.useri.create}:`,a.createdAt, true)
    .setThumbnail(a.avatarURL)
    .setFooter("Yumi", bot.user.displayAvatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "userinfo",
    aliases: [""],
    description: "Информация о пользователе",
    usage: ".userinfo <@user>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};