const joker = require('one-liner-joke')

module.exports = {
  name: 'n',
  description: 'A one-liner joke generator.',
  execute(msg) {
    let joke = joker.getRandomJoke({
      'exclude_tags': ['racist']
    });
    msg.reply(joke.body)
  },
}