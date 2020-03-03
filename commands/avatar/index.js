module.exports = {
  name: 'avatar',
  description: 'Get the URLs of your avatar or the mentioned users if any.',
  execute(msg) {
    if (!msg.mentions.users.size) {
      return msg.channel.send(`${msg.author.username}'s avatar: ${msg.author.displayAvatarURL({ dynamic: true })}`)
    }

    const avatarList = msg.mentions.users.map(user => {
      return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`
    })

    msg.channel.send(avatarList)
  },
}