const express = require('express')
const geoRouter = require('./routes/geoRouter')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use('/api/geo', geoRouter)

app.listen(PORT, ()=>{
    console.log('server star on PORT: ' + PORT)
})



