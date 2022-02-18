const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kmc5948:kmc5948@boilerplate.zxo8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('mongoDB Connecteed......'))
.catch(err => console.log(err))

app.get('/', (req, res) =>
  res.send('Hello World!')
)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
)