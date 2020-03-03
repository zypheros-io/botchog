// Run dotenv
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN
const PREFIX = process.env.PREFIX

const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()
const botCommands = require('./commands')

Object.keys(botCommands).map(key => {
  client.commands.set(botCommands[key].name, botCommands[key])
})

// const R6API = require('r6api.js')
// const siegeApi = new R6API(EMAIL, PASSWORD)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  // Check if message is a Botchog command
  if (!message.content.startsWith('.')) return
  // Process the message instance
  let { command, args } = processMessage(message)
  // Check if prefix is a valid command
  if (!client.commands.has(command)) return
  try {
    client.commands.get(command).execute(message, args)
  }
  catch (error) {
    console.log(error)
    message.reply('There was an error trying to execute that command!')
  }
})

/**
 * Splits the message into command and arguments
 * 
 * @param message The message of the user sent to Botchog
 *
 * 
 */
function processMessage(message) {
  let content = message.content
  let arguments = content.split(' ')
  return {
    command: arguments.shift().replace(PREFIX, ''),
    args: arguments
  }
}

client.login(TOKEN)
