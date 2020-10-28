module.exports = {
  name: "say",
  description: "Says what you tell it to say!",
  aliases: ["echo"],
  usage: 'say [text]',
  async run(message, args) {
    let say = args.join(' ')
    if (!say) { // Executes if you don't say anything
      return message.reply("what do you want me to say?")
    } else { // Executes if you do say something
      message.channel.send(`${message.author} says: ${say}`)
    }
  }
};
