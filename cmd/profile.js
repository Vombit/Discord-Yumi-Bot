const Discord = module.require("discord.js");
const profile = require("../profile.json");
var Jimp = require("jimp");

module.exports.run = async (bot, message, args) => {
    if (!message.guild) user = message.author;
     //message.channel.send(`:timer: | Сейчас узнаем о вас поподробнее!`).then(m => m.delete(1000));

     let toView = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.guild.member(message.author);



        Jimp.read(`./assets/photos/back.png`).then(async function(back) {
        Jimp.read(toView.user.avatarURL).then(async function(avatar) {
        Jimp.read(`./assets/photos/${profile[toView.id].background}`).then(async function(image) {
        Jimp.read(`./assets/photos/assets_1.png`).then(async function(repi) {
            Jimp.read(`./assets/photos/assets_3.png`).then(async function(lvl) {
                Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
                Jimp.loadFont(`./assets/fonts/2.fnt`).then(function (fontR) {
                Jimp.loadFont(`./assets/fonts/cyber.fnt`).then(function (cyber) {
                Jimp.loadFont(`./assets/fonts/1.fnt`).then(function (font3) {
                    avatar.resize(148, 148)
                    back.composite(avatar, 36, 70);
                    image.resize(512, 512)
                    back.composite(image, 0, 0);
                    repi.resize(60, 60)
                    back.composite(repi, 440, 16);
                    let lvs = 520 / profile[toView.id].maxs * profile[toView.id].xp
                    if(profile[toView.id].maxs >= 519){
                        lvs = profile[toView.id].maxs / 520 * profile[toView.id].xp
                    back.composite(lvl, -520 + lvs, 388)
                    } else {
                    back.composite(lvl, -520 + lvs, 388)
                    }

                    back.print(cyber, 190, 170, `${toView.user.username}`);
                    back.print(fontR, 457, 24, `${profile[toView.id].rep}`);

                    back.print(font3, 36, 225, `Level: ${profile[toView.id].lvl}`);
                    back.print(font3, 36, 260, `Score: ${profile[toView.id].score}`);
                    back.print(font3, 36, 295, `Coins: ${profile[toView.id].coins}`);
                    back.print(font3, 36, 330, `Global Rank: coming soon...`);
                    back.print(font3, 200, 440,`${profile[toView.id].xp}/${profile[toView.id].maxs}`);
                    let outputFile = './assets/fon/' + Math.random().toString(36).substr(2, 5) + "yumi." + back.getExtension();
                    back.write(outputFile, function() {
                        message.channel.send({file: outputFile}).then(function() {
                        })})
                })
                })
                })
            })
        })
        })
        })
    })
})
}
module.exports.help = {
  name: 'prof',
  aliases: [""],
  description: "Посмотреть свой/чужой профиль",
  usage: ".profile <@user>",
  noalias: "No Aliases",
  enabled: true
};