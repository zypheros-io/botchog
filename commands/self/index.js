module.exports = {
  name: 'self',
  description: 'Returns your basic Discord information.',
  execute(msg) {
    msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`)
  },
} 