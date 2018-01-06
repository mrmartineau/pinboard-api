const axios = require('axios')
const { send } = require('micro')
const DOMAIN = 'http://feeds.pinboard.in/'

module.exports = async function(req, res) {
  const params = req.url
  const path = `${DOMAIN}${params}`
  const response = await axios(path)
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, response.data)
}
