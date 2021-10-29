const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use('styles.css', express.static(path.join(__dirname, '../public/index.css')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.port || 5915

app.listen(port, function(){
  console.log(`Server running on ${port}`)
})