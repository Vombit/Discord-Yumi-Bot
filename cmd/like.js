const Discord = module.require("discord.js");
const profile = require("../profile.json");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
let timely = new Set();
let timelyhours = 24;
module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    if(timely.has(message.author.id)) {
        var embedtimely = new Discord.RichEmbed()
        .setColor('RED')
        .addField(`${lang.like.kd} ${timelyhours}${lang.like.hrs}.`)
        message.delete()
        message.channel.send(embedtimely)
    return;};
    let user = message.mentions.users.first() || message.author;
    timely.add(message.author.id);

    profile[user.id].rep += 1;
    let avauser = user.avatarURL;

    var embedtimely = new Discord.RichEmbed()
    .setColor('GREEN')
    .addField(`${lang.like.cool}`, `${lang.like.send}: ${user.username}`)
    message.channel.send(embedtimely)
    setTimeout(() => {
        timely.delete(message.author.id)
    }, timelyhours * 3600000);
};
module.exports.help = {
    name: "like",
    aliases: [""],
    description: "Отправить лайк пользователю",
    usage: ".like <@user>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};