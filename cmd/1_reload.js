const Discord = module.require("discord.js");

let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');

module.exports.run = async (bot,message,args) => {
    if(message.author.id != "*") return message.channel.send("Ты не мой хозяин")
    if(!args[0]) return message.channel.send("выбери команду")
    let cmdName = args[0].toLowerCase()
    try {
        delete require.cache[require.resolve(`./${cmdName}.js`)]
        bot.commands.delete(cmdName)
        const pull =require(`./${cmdName}.js`)
        bot.commands.set(cmdName, pull)
    } catch (e) {
        return message.channel.send(`Не могу перезагрузить: \`${args[0].toUpperCase()}\``)
    }

};

module.exports.help = {
    name: "reload",
    aliases: [""],
    description: "",
    usage: ".",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};