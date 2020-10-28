# Command Handler
This is a command handler which I wrote by myself.  
You may use this command handler code, as long as you credit me by posting [the url of this repo](../../ "the url of this repo (https://github.com/Irian3x3/basic-command-handler)") somewhere in your bot.

## How to use
Run the command:
```
$ git clone https://github.com/Irian3x3/basic-command-handler
```
### How a command would look like
```js
// Basic Command
module.exports = {
  name: "someName",
  description: "Some command description",
  async run(message, args, bot) {
  // Some code here...
  }
}
```
---
```js
// More content
module.exports = {
  name: "someName",
  description: "Some command description",
  aliases: ["someAlias", "someOtherAlias"],
  usage: "(usage goes here)",
  async run(message, args, bot) {
    // Code goes here 🙂
  }
}
```
Also, make sure you have the `commands` folder and a category folder inside, and your folder path should look like this:
```ps                
                          commandFile.js
          categoryFolder1/
commands/
         
```
## If you find an issue in the code, [create an issue](../../issues/new) or message me on discord (`Irian3x3#0001`) and I'll try to get back to you
## [Get help here](https://invite.gg/iriandev)
