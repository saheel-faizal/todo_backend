const express = require('express')
const app = express();
const api = require('./api')
const PORT = 3000

app.get('/',(req,res) => {
    res.json({
        message: "Welcome to todo"
    })
})

app.use('/api',api)

app.listen(PORT, ()=> {
    console.log(`listening to http://localhost:${PORT}`)
})