const Discord = module.require("discord.js");
let base = require('../base/guilds.json');
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${lang.permsuser}`);
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`${lang.permsbot}`);

    let us = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!us) return message.channel.send(`${lang.selectUser}`);
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send(`${lang.selectReason}`);
    if (us.hasPermission("ADMINISTRATOR")) return message.channel.send(`${lang.manage.ban.unban}.`);

        us.send(`${lang.manage.ban.usSend} **${message.guild.name}**, ${lang.manage.usReas}: ${reason}.`).then(() =>
        message.guild.ban(us, {days: 1, reason: reason})).catch(err => console.log(err))

        //message.guild.member(us).ban(us, {days: 1, reason: reason});

        message.channel.send(`**${us.user.username}** ${lang.manage.ban.guilds}.`)

    let embed = new Discord.RichEmbed()
        .setColor("#FF1111")
        .setAuthor(`Yumi Logs`, bot.user.displayAvatarURL)
        .addField(`${lang.manage.command}`, "ban")
        .addField(`${lang.manage.user}`, us.user.username)
        .addField(`${lang.manage.moder}`, message.author.username)
        .addField(`${lang.manage.reass}`, reason)
        .setTimestamp()

        let chans = base[message.guild.id].logsChannel;
        let rChannel =message.guild.channels.find(c => c.name === chans)
        rChannel.send(embed)
};

module.exports.help = {
    name: "ban",
    aliases: [""],
    description: "Забанить пользователя гильдии",
    usage: ".ban <@user> <причина>",
    noalias: "No Aliases",
    accessible: "ADMINISTRATOR",
    enabled: true
};