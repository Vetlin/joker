require('dotenv').config();
const express = require('express')
const app = express()
const router = require('./classes/router')

app.get('*', (req, res) => {
    let result = router.run(req.originalUrl)
    res.send(result)
})

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))