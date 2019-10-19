const open = require('open')

module.exports = openJacksonzMedium

async function openJacksonzMedium () {
  const jacksonzMediumProfileUrl = 'https://medium.com/@jacksonz666'
  await open(jacksonzMediumProfileUrl)
  console.log('Done! ;)')
}
