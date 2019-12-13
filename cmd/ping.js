const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor('Ping-Pong! 🏓')
    .setDescription(`${Date.now() - message.createdTimestamp}`+ ' ms')
    .setTimestamp();
    message.channel.send(embed);
};
module.exports.help = {
    name: "ping",
    aliases: [""],
    description: "Ping-Pong ms",
    usage: ".ping",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};