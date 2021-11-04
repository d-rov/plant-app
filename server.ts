const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 5000

// database connection
// mongodb

app.use(express.json())

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// app GET one plant
// app GET all plants
// app POST one plant