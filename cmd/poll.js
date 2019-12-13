const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    let botmessage = args.join(" ");
    message.delete().catch();
      if (!args[0]) return message.reply(`${lang.poll.quest}`);

    let embed = new Discord.RichEmbed()
        .setColor("#FF1111")
        .setAuthor(`Yumi Bot`, bot.user.displayAvatarURL)
        .addField(`${lang.poll.send}:`, `${message.author}`)
        .addField(`${lang.poll.poll}:`, botmessage)
        .setTimestamp()
        //rChannel.send(embed)

      const pollTopic = await message.channel.send(embed);
      pollTopic.react(`⛔`);
      pollTopic.react(`✅`);
};
module.exports.help = {
    name: "poll",
    aliases: [""],
    description: "",
    usage: ".poll <question>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};