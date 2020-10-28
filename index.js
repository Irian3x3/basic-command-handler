const fs = require('fs')
const Discord = require('discord.js');

let prefix = "!"; // Not required.

const bot = new Discord.Client();

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
    console.log("Ready")
})

bot.on('message', m => {
    if(!m.content.startsWith(prefix)) return;
    const args = m.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const message = m;

    const command = bot.commands.get(commandName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        if(!command) return;
        
        try {
            command.run(message, args, client)
        } catch (error) {
            console.error(error)
            m.channel.send(`There was an error executing \`${command.name}\`.`)
        }
})

bot.login('TOKEN'); // We login into the bot, replace TOKEN to your bot's token.
