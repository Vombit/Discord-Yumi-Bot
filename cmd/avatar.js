const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(user.tag)
      .setImage(`${user.displayAvatarURL}?size=2048`)
    message.channel.send(embed)
}
module.exports.help = {
    name: "avatar",
    aliases: [""],
    description: "Просмотр аватара пользователя",
    usage: ".avatar <@user>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
}