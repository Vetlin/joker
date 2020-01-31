require('dotenv').config();
const express = require('express')
const csv = require('csv-express')
const app = express()
const router = require('./classes/Router')
const middleWare = require('./classes/MiddleWare')

app.use((req, res, next) => {
    middleWare.run(req, res)
    next()
})

app.get('*', async function (req, res) {
    let result = await router.run(req.originalUrl)

    switch (req.middleware) {
        case 'csv':
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename="' + 'download-' + Date.now() + '.csv"');
            res.csv(result, true);
            break;
        case 'json':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
            break;
        default:
            res.sendStatus(404)
    }
})

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))