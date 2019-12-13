const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    let embed = new Discord.RichEmbed()
    .setColor("#d60a4c")
    .setAuthor(`Yumi Bot`, bot.user.displayAvatarURL)
    .setTitle(`${lang.invYumi}`)
    .setURL('https://discordapp.com/oauth2/authorize?&client_id=643676300879331359&scope=bot&permissions=2147483127')
    message.channel.send(embed);
};
module.exports.help = {
    name: "invite",
    aliases: [""],
    description: "Пригласить Yumi на сервер",
    usage: ".invite",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};