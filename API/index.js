const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const app = express()
const port = 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/' , (req, res)=> res.send('O pai ta on'))

app.listen(port, () => console.log('API rodando na 3000'))