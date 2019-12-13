const Discord = require("discord.js");
let base = require('../base/guilds.json');
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot, message, args) => {
  if(message.guild.region === 'russia') lang = rus;

   if(!args[0]) return bot.send(`${lang.selectUser}`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(`${lang.csear}`);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send(`${lang.selectReason}`);

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField(`📕${lang.manage.rep.claimon}`, `${rUser} with ID: ${rUser.id}`)
    .addField(`📝${lang.manage.rep.claimfor}`, `${message.author} with ID: ${message.author.id}`)
    .addField(`📢${lang.manage.rep.channel}`, message.channel)
    .addField(`📄${lang.manage.reass}`, rreason)

    let okaydm = new Discord.RichEmbed()
        .setColor('#800080')
        .addField(`${lang.manage.rep.plzwait}`, `${rUser.user.tag}`)
        message.channel.send(okaydm)


        let chans = base[message.guild.id].logsChannel;
        let rChannel =message.guild.channels.find(c => c.name === chans)
        rChannel.send(embed)

}

module.exports.help = {
  name: "report",
  aliases: [""],
  description: "Пожаловаться на пользователя",
  usage: ".report <@user> <причина>",
  noalias: "No Aliases",
  accessible: "",
  enabled: true
}