require('dotenv').config()

const USER_EMAIL = process.env.USER_EMAIL
const USER_PASSWORD = process.env.USER_PASSWORD

const R6API = require('r6api.js')
const siege = new R6API(USER_EMAIL, USER_PASSWORD)

module.exports = {
  name: 'r6',
  description: 'Retrieves the user\'s Rainbow Six Siege (PC) Ranked Stats using Ubisoft\'s API',
  async execute(msg, args) {
    if (args.length === 0) {
      msg.reply('Give me your username, brah')
      return
    }

    let username = args[0]
    let season = args[1]
    let platform = 'uplay'

    // Retrieve data using R6API
    let id = await siege.getId(platform, username)
      .then(users => users[0].userId)

    let seasons = await siege.getRank(platform, id, { regions: 'apac', seasons: args[1] })
      .then(rankedStatistics => rankedStatistics[0].seasons)

    // Build the response
    let response = `here\'s ${username}\'s ranked stats, scrub\n\n>>> `
    for (season in seasons) {
      let currentSeason = seasons[season]
      let regionStats = currentSeason.regions.apac
      let stats = {
        season: currentSeason.name,
        currentRank: regionStats.current.name,
        currentMMR: regionStats.current.mmr,
        maxRank: regionStats.max.name,
        maxMMR: regionStats.max.mmr,
        kdRatio: regionStats.kills/regionStats.deaths,
        winRatio: (regionStats.wins/regionStats.matches)*100,
        nextRankMatchesNeeded: regionStats.nextRankMatchesNeeded
      }

      response += 
        `**Season**: ${stats.season}\n**Rank [C]**: ${stats.currentRank} / ${stats.currentMMR}\n**Rank [M]**: ${stats.maxRank} / ${stats.maxMMR}\n**K/D**: ${stats.kdRatio}\n**W%**: ${stats.winRatio}%\n**Next Rank In**: ${stats.nextRankMatchesNeeded} games \n----------------------------\n`
    }

    msg.reply(response)
  },
}