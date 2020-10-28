module.exports = {
  name: "ping",
  description: "Pong!",
  aliases: ["pong"],
  usage: 'ping',
  async run(message, bot) {
    const m = await message.channel.send("Ping...")
    m.edit(`Pong! The message took ${Date.now() - message.createdTimestamp} ms. The API took ${Math.round(bot.ws.ping)} ms.`)
  },
};
