//require packages 
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
require('./models')
//config our express app
const app = express()
const PORT = process.env.PORT || 4000
const rowdyResults = rowdy.begin(app)
//middlewares
app.use(morgan('tiny'))
app.use(cors())
//require body parser
app.use(express.json())
app.use(express.urlencoded({extended: false }))






//test index routes 
app.get('/',(req,res)=> {
    res.json({msg:'My p3 begin'})
})


//controllers
app.use('/users', require('./controllers/Users/user'))
app.use('/comments', require('./controllers/comments') )
app.use('/posts',require('./controllers/posts'))


//Listen to server by telling the port 
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`You are listening to the ${PORT} yaaaaa`)
})