const Discord = module.require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${lang.permsuser}`);
    if(args[0]>100) return message.channel.send(`${lang.clear.max}`);//bot.send*
    if(args[0]<1) return message.channel.send(`${lang.clear.sel}`);
    args[0]++;
    message.channel.bulkDelete(args[0]--).then(() =>{
        message.channel.send(`${lang.clear.cl} ${args[0]--} ${lang.clear.msg}.`).then(msg => msg.delete(3*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "cl",
    aliases: [""],
    description: "Удалить X сообщений",
    usage: ".cl <count>",
    noalias: "No Aliases",
    accessible: "MANAGE_MESSAGES",
    enabled: true
};