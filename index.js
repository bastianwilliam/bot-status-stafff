const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "your bot token",

  prefix: "!",

    intents: "all"

});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {

  const folder = fs

    .readdirSync(`./commands/${files}/`)

    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {

    const command = require(`./commands/${files}/${commands}`);

    bot.command({

      name: command.name,

      aliases: command.aliases,

      description: command.description,

      usage: command.usage,

      code: command.code

    });

  }

}

bot.loopCommand({
	code: `$editMessage[message id;{newEmbed:{title:Moderator status}{description: 
**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]
 }{thumbnail:$serverIcon[$guildID]}{footer:Updates every 10 seconds}{color:BLUE}{timestamp}}]

`,

	channel: 'channel id',

	executeOnStartup: true,

	every: 11000
});
// You can add more **$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]
