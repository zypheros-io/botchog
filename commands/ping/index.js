module.exports = {
  name: 'ping',
  description: 'Returns the amount of time it took for the message to get to Botchog\'s hands',
  execute(msg, args) {
    msg.reply(`Pong! It took ${msg.client.ws.ping} ms to get to you`)
  },
}