const http = require('http')
const app = http.createServer(handler)

app.listen(process.env.PORT || 3000)

function handler (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('It\'s alive')
}
