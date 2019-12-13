const Discord = module.require("discord.js");
let bconfig = require('../botconfig.json');
let rus = require('../assets/language/ru.json');
let eng = require('../assets/language/en.json');
let lang = eng;

let prefix = bconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if(message.guild.region === 'russia') lang = rus;

    if (args[0] === "help") return message.channel.send(`${lang.help.try} **${prefix}help**`)
    if (args[0]) {
        let cmds = args[0];
        if(bot.commands.has(cmds)) {
            cmds = bot.commands.get(cmds);
            let Membed = new Discord.RichEmbed()
            .setColor("#d60a4c")
            .setAuthor(`Yumi Help`, bot.user.displayAvatarURL)
            .setDescription(`${lang.help.prefix}: " ${prefix} "\n\n **${lang.use}:** ${cmds.help.name}\n**${lang.help.desc}:** ${cmds.help.description || "No description"}\n**${lang.help.cmd}:** ${cmds.help.usage || "No usage"}\n**${lang.help.for}:** ${cmds.help.accessible || "Everyone"}\n**Aliases:** ${cmds.help.noalias || cmds.help.aliases}\n**${lang.help.status}:** ${cmds.help.enabled || false}`)
            bot.send(Membed)
        }}
    if (!args[0]) {
        let Sembed = new Discord.RichEmbed()
        .setAuthor(`Yumi Help`, bot.user.displayAvatarURL)
        .setTitle(`${lang.help.bott}`)
        .setColor("#d60a4c")

        .setTimestamp()
        .setDescription(`${lang.use} \`\`.help <command>\`\` ${lang.help.moreinfo} \n\n ${lang.help.first}: \`\`setting\`\` `)
        .addField('Yumi:', "``invite``, ``ping``, ``help``, ``err``, ``uptime``")
        .addField('Fun:', "``prof``, ``math``, ``like``, ``bonus``, ``8ball``, ``poll``")
        .addField(`${lang.help.manage}:`, "``cl``, ``settings``, ``setHi``, ``setBye``, ``yumisay``,``kick``, ``mute/unmute``, ``ban/unban``, ``softban``, ``report``")
        .addField('Utils:', "``avatar``, ``random``, ``serverinfo``, ``userinfo``, ``guildroles``")
        .addField('Links:',` [invite Yumi](https://discordapp.com/oauth2/authorize?&client_id=643676300879331359&scope=bot&permissions=2147483127), [Yumi server](*) [Support server](https://discord.gg/5xMZ3zA)`)

        bot.send(Sembed)
    }
}
module.exports.help = {
    name: "help",
    aliases: [""],
    description: "",
    usage: ".usage",
    noalias: "No Aliases",
    accessible: "",
    enabled: true
};