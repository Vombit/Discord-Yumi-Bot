const Discord = module.require("discord.js");
let base = require('../base/guilds.json');
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
const fs = require('fs');
let lang = eng;

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(["MANAGE_CHANNELS", "MANAGE_GUILD", "ADMINISTRATOR"])) return message.channel.send(`${lang.permsbot}`);

    if(message.guild.region === 'russia') lang = rus;
    var yes = "y";
    var mainch ="";
    message.channel.send(`${lang.settings.yorn}: y/n`)
    const sett = new Discord.MessageCollector(message.channel,(m) => m.author.id === message.author.id,{time:10000,max:1});
    sett.on('collect', (message) => {
        sett.stop();
        if (message.content == yes){
            message.channel.send(`${lang.settings.hich}`);
            const logs = new Discord.MessageCollector(message.channel,(m) => m.author.id === message.author.id,{time:20000,max:1});
            logs.on('collect', (message) => {
                logs.stop();
                base[message.guild.id].hiChannel = message.content;
                fs.writeFile('./base/guilds.json',JSON.stringify(base, null, '\t'),(err)=>{
                    if(err) console.log(err);});
                message.channel.send(`${lang.settings.logsch}`);
                const hi = new Discord.MessageCollector(message.channel,(m) => m.author.id === message.author.id,{time:20000,max:1});
                hi.on('collect', (message) => {
                    hi.stop();
                    base[message.guild.id].logsChannel = message.content;
                    fs.writeFile('./base/guilds.json',JSON.stringify(base, null, '\t'),(err)=>{
                        if(err) console.log(err);});
                    message.channel.send(`${lang.settings.thx}`)
                })
            })
         }else{
         message.channel.send(`${lang.settings.can}`);
         }

})


};
module.exports.help = {
    name: "setting",
    aliases: [""],
    description: "",
    usage: ".settings",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};