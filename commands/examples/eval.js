module.exports = {
  name: "eval",
  description: "Evaluates javascript code!",
  aliases: ["js", "javascript", "eval"],
  usage: 'eval [code]',
  async run(message, args, bot) {
  
    if (message.author.id !== YOUR ID HERE) {
      return message.reply("You cannot use this command.")
    };
  
    let code = args.join(" ");
    if (!code) return message.reply("what code would you like to evaluate?")
    else {
      try {
        let evaluated = eval(code)

        let hrStart = process.hrtime();
        let hrDiff = process.hrtime(hrStart);

        typeof evaluated !== 'string' ? evaluated = require('util').inspect(evaluated) : '';

        message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ""}${hrDiff[1] / 1000000} ms.* \`\`\`js\n${evaluated}\`\`\``)
           } catch(e) {
          message.channel.send(`Error evaluating: ${e}`)
      }
    }
  },
};  
