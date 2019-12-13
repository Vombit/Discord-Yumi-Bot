const Discord = require("discord.js");
const profile = require("../profile.json");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
let timely = new Set()
let timelyhours = 6

exports.run = async (bot, message, args) => {
if(message.guild.region === 'russia') lang = rus;
if(timely.has(message.author.id)) {
    var embedtimely = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`${lang.bonus.kd} - ${timelyhours} ${lang.bonus.hrs}.`)
        message.delete()
        message.channel.send(embedtimely)
return;
    }
    //if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        timely.add(message.author.id);
    //}
    profile[message.author.id].coins += 200
    let avauser = message.author.avatarURL
    var embedtimely = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`${lang.bonus.bns} "${message.author.username}"`, avauser)
    .addField(`${lang.bonus.cool}`, `${lang.bonus.take} **200** coins\n ${lang.bonus.kd} - ${timelyhours} ${lang.bonus.hrs}.`)
    message.channel.send(embedtimely)
    setTimeout(() => {
        timely.delete(message.author.id)
    }, timelyhours * 3600000);
};
module.exports.help = {
    name: "bonus",
    aliases: [""],
    description: "Получить бонус",
    usage: ".bonus",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};