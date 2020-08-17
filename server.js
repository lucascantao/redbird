
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const mongoose = require('mongoose')

const MainRouter = require('./src/routes/main')

nunjucks.configure('./src/views', {
    express: app,
    noCache: true
})

mongoose.connect('mongodb://localhost:27017/redbird', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }, () => {
        console.log('we are connected')
    })

app.use(express.static(__dirname + '/public'))

app.use('/api/redbird', MainRouter)

app.listen(3000, () => {console.log('listening clear')})