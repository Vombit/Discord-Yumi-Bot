const Discord = module.require("discord.js");
let base = require('../base/guilds.json');
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${lang.permsuser}`);
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(`${lang.permsbot}`);

    let us = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!us) return message.channel.send(`${lang.selectUser}`);

    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send(`${lang.selectReason}`);

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if (!muterole) return message.channel.send(`${lang.manage.unmute.unmute}`)

    us.removeRole(muterole.id).then(() => {
        message.delete();
        us.send(`${lang.manage.unmute.usmSend} ${message.guild.name}, ${lang.manage.usReas}: ${reason}.`)
        message.channel.send(`${us.user.username} ${lang.manage.unmute.guildsm}.`)
    })

    let embed = new Discord.RichEmbed()
        .setColor("#FF1111")
        .setAuthor(`Yumi Logs`, bot.user.displayAvatarURL)
        .addField(`${lang.manage.command}`, "unmute")
        .addField(`${lang.manage.user}`, us.user.username)
        .addField(`${lang.manage.moder}`, message.author.username)
        .addField(`${lang.manage.reass}`, reason)
        .setTimestamp()

    let chans = base[message.guild.id].logsChannel;
    let rChannel =message.guild.channels.find(c => c.name === chans)
    rChannel.send(embed)
};

module.exports.help = {
    name: "unmute",
    aliases: [""],
    description: "Разглушить пользователя гильдии",
    usage: ".unmute <@user> <причина>",
    noalias: "No Aliases",
    accessible: "MANAGE_ROLES",
    enabled: true
};