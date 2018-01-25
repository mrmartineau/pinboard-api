const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const DOMAIN = 'http://feeds.pinboard.in/'

const handler = async function(req, res) {
  const params = req.url
  const path = `${DOMAIN}${params}`
  const response = await axios(path)
  send(res, 200, response.data)
}

module.exports = cors(handler)
