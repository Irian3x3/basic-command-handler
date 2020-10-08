const fs = require('fs')
const Discord = require('discord.js');

let prefix = "!"; // Not required.

const client = new Discord.Client();

client.commands = new Discord.Collection();

const folders = fs.readdirSync('./commands');

    for (const category of folders) {
        const folder = fs.readdirSync(`./commands/${category}/`).filter(file => file.endsWith(".js"));
        for(const cmdFile of folder) {
            const command = require(`./commands/${category}/${cmdFile}`)
            client.commands.set(command.name, command);
        }
    }

client.once("ready", () => {
    console.log("Ready")
})

client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        if(!command) return;
        
        try{
            command.execute(message, args, client)
        } catch (error) {
            console.error(error)
            message.channel.send(`There was an error executing that command: \`\`\`${error}\`\`\``)
        }
})

client.login('TOKEN') // We login into the bot, replace TOKEN to your bot's token.
