const Discord = require("discord.js");
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if(message.guild.region === 'russia') lang = rus;

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send(`${lang.err.sel}.`).then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#ff0f00")

   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`[${message.guild.name}](${Invite.url})`)
   .setTitle("Сервер:")
   .addField("Отправитель", Sender, true)
   .addField("ID отправителя: ", Sender.id, true)
   .addField(`${lang.err.prob}:`, sayMessage)
   .setTimestamp()

   bot.channels.get('*').send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle(`${lang.err.probsend}`)
    .addField(`${lang.err.sender}:`, Sender)
    .addField(`${lang.err.prob}:`, sayMessage)
    .setFooter(`${lang.err.wat}`)

    message.channel.send(embed);


      }
module.exports.help = {
    name: "err",
    aliases: [""],
    description: "Отправить ошибку/пожелание о работе бота",
    usage: ".err <описание>",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
}