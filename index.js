const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.get('/', (req,res) => {
  res.render('sanFelo')
})

app.use('/public', express.static('public'));

app.listen(3000, () => {
  console.log('R')
})