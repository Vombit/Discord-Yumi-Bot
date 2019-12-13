const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    message.channel.send(`${lang.sinfo.test}`);
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${lang.permsuser}`);
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(`${lang.permsbot}`);
};

module.exports.help = {
    name: "test",
    aliases: [""],
    description: "",
    usage: ".",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};