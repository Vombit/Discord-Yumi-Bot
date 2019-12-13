const Discord = module.require("discord.js");
const fs = require("fs");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${lang.permsuser}`);

    let mChan = message.mentions.channels.first();
    let argsresult;
    message.delete().catch();
    if(mChan) {
        argsresult = args.slice(1).join(" ");
        mChan.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
    bot.send(botmessage);

};
module.exports.help = {
    name: "yumisay",
    aliases: [""],
    description: "Написать от имени бота",
    usage: ".yumisay <message> || .yumisay <channel> <message>",
    noalias: "No Aliases",
    accessible: "MANAGE_MESSAGES",
    enabled: true
};