const insulter = require('insult')

module.exports = {
  name: 'insult',
  description: 'A command that insults you when executed, literally.',
  execute(msg) {
    let insult = insulter.Insult()
    msg.reply(insult)
  },
}