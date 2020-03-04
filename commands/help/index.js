const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'help',
  description: 'A guide embed on how to us-err communicate with Botchog.',
  execute(msg) {
    const embed = new MessageEmbed()
      .setColor('#a82139')
      .setTitle('Commands')
      .setDescription('Let me teach you how to us-err communicate with me, sweetie.')
      .addField('**Prefix**:', '**.** | ***ex: .<command>***')
      .addField('**.help**', 'Well, it just gives you this exact shit just in case you are a dummy.')
      .addField('**.avatar**', 'Extracts the Discord avatar of the mentioned user/s. It shits on your own if you don\'t specify a user.')
      .addField('**.ping**', 'Just so you can stalk me. You must be wondering if I\'m up huh, you silly.')
      .addField('**.insult**', 'It makes me insult you...b-but why would you do that????')
      .addField('**.r6**', 'Your shitty R6 ranked statistics using R6API.', true)
      .addField('Usage', '.r6 <ign> 5-16 | all | none', true)
      .addField('**.n**', 'I don\'t know why I used n, but hey I\'ll give jokes if you use this')
      .addField('**.self**', 'Shits on your Discord username and ID. Just kidding.')
      .setFooter('O btw, I made this bot for fun so if you want this on your discord pls send me a pm thru Zypheros#3133 uwu')
      .setTimestamp()
    msg.channel.send(embed)   
  },
}