const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    if (!args[0]) return message.reply(`${lang.balls.warn}.`);
    message.delete();
    let replies = lang.balls.replies;
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice(0).join(" ");
    if(question === "8ball") replies[result] = 'What?'
    if(question === "Когда будет война?") replies[result] = 'Нинада этого'
    if(question === "саня?") replies[result] = 'Саня не в порядке'


    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#0ff00")
        .addField(`${lang.balls.quest}:`, question)
        .addField(`${lang.balls.reply}:`, replies[result]);

        bot.send(embed)
};
module.exports.help = {
    name: "8ball",
    aliases: [""],
    description: "Отвечу на любой вопрос.",
    usage: ".8ball <question>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};