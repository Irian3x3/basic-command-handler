# Command Handler
This repository is a basic command handler which I wrote by myself.  
You may use this command handler code, as long as you credit me by posting [the url of this repo](../../) somewhere in your bot.

## How to use
Run the command:
```
$ git clone https://github.com/Irian3x3/basic-command-handler
```
### How a command would look like
Your basic command should look like
```js
module.exports = {
  name: "someName",
  description: "Some command description",
  execute(message, args, client) {
  // Some code here...
  }
}
```
## If you find an issue in the code, [create an issue](../../issues/new) and I'll try to get back to you
