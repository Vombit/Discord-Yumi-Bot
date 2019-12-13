const Discord = module.require("discord.js");
const profile = require("../profile.json");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;
module.exports.run = async (bot,message,args) => {
    if(message.guild.region === 'russia') lang = rus;
    function random(low, high) {
        return Math.floor(Math.random() * (high + low + 1) - low);
    }

var b =  random(0, 100)
var a =  random(0, 100)
var code = a + "+" + b
var code2 = (a+b)

var user = message.author

           message.channel.send(code + "= ?")
         const collector = new Discord.MessageCollector(
        message.channel,
        (m) => m.author.id === message.author.id,
        { time: 10000, max: 1 }
    );
    collector.on('collect', (message) => {
            collector.stop();
            if (message.content == code2){
                profile[message.author.id].coins += 10;
             message.channel.send(`${lang.math.get} **10** coins!`);

             }else{
             message.channel.send(`${lang.math.try}`);
             }

    })
};
module.exports.help = {
    name: "math",
    aliases: [""],
    description: "За решение задачки получаешь coins",
    usage: ".math",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};