const open = require('open')

module.exports = openJacksonzTwitter

async function openJacksonzTwitter () {
  const jacksonzTwitterProfileUrl = 'https://twitter.com/TheSWE2'
  await open(jacksonzTwitterProfileUrl)
  console.log('Done! ;)')
}
