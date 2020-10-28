const fs = require('fs')
const Discord = require('discord.js');

let prefix = "!"; // Not required.

const bot = new Discord.Client({
    disableMentions: 'everyone' // This is fully optional but it's preferred to disable @everyone and @here mentions.
});

bot.commands = new Discord.Collection();

const folders = fs.readdirSync('./commands');

    for (const category of folders) {
        const folder = fs.readdirSync(`./commands/${category}/`).filter(file => file.endsWith(".js"));
        for(const cmdFile of folder) {
            const command = require(`./commands/${category}/${cmdFile}`)
            bot.commands.set(command.name, command);
        }
    }

bot.once("ready", () => {
    console.log(`I'm online! Login ${bot.user.tag}!`)
})

bot.on('message', m => {
    if (!m.content.startsWith(prefix)) return;
    
    const args = m.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    const message = m;

    const command = bot.commands.get(cmd)
        || bot.commands.find(c => c.aliases && c.aliases.includes(cmd));
        
        if (!command) return;
        
        try {
            command.run(message, args, client)
        } catch (error) {
            console.error(error)
            m.channel.send(`There was an error executing \`${command.name}\`.`)
        }
})

bot.login('TOKEN'); // We login into the bot, replace TOKEN to your bot's token.
