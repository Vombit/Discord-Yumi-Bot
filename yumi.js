const Discord = require('discord.js');
let rus = require('./assets/language/ru.json');
let eng = require('./assets/language/en.json');
let lang = eng;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
//let bconfig = require('./botconfig.json');
let profile = require('./profile.json');
let base = require('./base/guilds.json');
//let token = bconfig.token;
//let prefix = bconfig.prefix;
const fs = require('fs');

fs.readdirSync('./cmd/').filter(file => file.endsWith('.js')).forEach(file => {
  bot.commands.set(require(`./cmd/${file}`).help.name, require(`./cmd/${file}`));
  bot.aliases.set(require(`./cmd/${file}`).help.aliases, require(`./cmd/${file}`));
  let props = require(`./cmd/${file}`);
});
//botReady
  bot.on('ready', async () => {
    console.log(`Приветик, Я ${bot.user.username}`);
    let statuses = [
      `Yumi | .help`,
      `${bot.users.size} users`,
      `Use .help`
    ]
    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
      bot.user.setActivity(status, { type: 'WATCHING' });
    }, 10*1000);
  });
///botReady

//messageStates

bot.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;
  //lvlUpSet
    let mai = message.author.id;
    let username = message.author.username;
    bot.send = function (msg){message.channel.send(msg);};
    let aaddxp = Math.floor(Math.random() * 5) + 5;
    if(!profile[mai]){
      profile[mai] ={
        username:username,
        score:10,
        coins:200,
        warns:0,
        lvl:1,
        xp:0,
        maxs:50,
        rep:0,
        zero:"",
        background: "fon1.png"
      };};
    let us = profile[mai];
    if(message.guild.region === 'russia') lang = rus;
    us.xp += aaddxp;
    us.score++;
    if(us.maxs < us.xp){
      us.lvl++;
      us.xp = 0;
      us.maxs += 20;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`${lang.lvl.first} ${us.lvl} ${lang.lvl.second}!`)
      .setFooter(`${message.author.username}`, message.author.avatarURL)
      message.channel.send(embed)
    };
    fs.writeFile('./profile.json',JSON.stringify(profile, null, '\t'),(err)=>{
      if(err) console.log(err);});
  ///lvlUpSet
    let userid = message.author.id;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmf = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)))
    if(cmf) cmf.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
  });
///messageStates

bot.on("guildCreate", async guild =>{
  let gui = guild.id;
  if(!base[gui]){
    base[gui] ={
      score:0,
      coins:0,
      rep:0,
      logsChannel:"",
      hiChannel:"",
      on:false,
      zero:"",
      msgHi:"",
      msgBye:""
    };};
    fs.writeFile('./base/guilds.json',JSON.stringify(base, null, '\t'),(err)=>{
      if(err) console.log(err);});
});

//MemberAdd
bot.on('guildMemberAdd', async member => {
  if(base[member.guild.id].on === true) {
    var chann = base[member.guild.id].hiChannel;
    var msgf = base[member.guild.id].msgHi;
    var channel = member.guild.channels.find(c => c.name === chann)
    channel.send(`${member} ${msgf}`);
  }
});
///MemberAdd
//MemberRemove
bot.on('guildMemberRemove', async member => {
  if(base[member.guild.id].on === true) {
    var chann = base[member.guild.id].hiChannel;
    var msgf = base[member.guild.id].msgBye;
    var channel = member.guild.channels.find(c => c.name === chann)
    channel.send(`${member} ${msgf}`);
  }
});
///MemberRemove

//consoleLogs
 console.logCopy = console.log.bind(console);
  var
    year = new Date().getFullYear(),
    month = new Date().getMonth()+1,
    day = new Date().getDate(),
    hour = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds();
  console.log = function(data) {
    this.logCopy(data)
    var writeStr = `[${hour}:${minutes}:${seconds}] [Log] ${data}\n`;
    fs.appendFileSync(`.assets/logs/${day}-${month}-${year} logs.txt`, writeStr, (err) => {
      if (err) console.log(err)
    });}
  console.error = function(data) {
    this.logCopy(`[Error]\n${data}`)
    var writeStr = `[${hour}:${minutes}:${seconds}] [Error] ${data}\n`;
    fs.appendFileSync(`.assets/logs/${day}-${month}-${year} logs.txt`, writeStr, (err) => {
      if (err) console.log(err)
    });}
  console.warn = function(data) {
    this.logCopy(`[Warn]\n${data}`)
    var writeStr = `[${hour}:${minutes}:${seconds}] [Warn] ${data}\n`;
    fs.appendFileSync(`.assets/logs/${day}-${month}-${year} logs.txt`, writeStr, (err) => {
      if (err) console.log(err)
    });};
///consoleLogs
bot.login(token);//token
