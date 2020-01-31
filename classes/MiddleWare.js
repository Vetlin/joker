class MiddleWare {

    constructor() {
        this.possibleMiddlewares = ['csv', 'json']
    }

    run(req, res) {
        let splitUrl = req.originalUrl.slice(1).split('/')
        if (splitUrl.length < 2) res.sendStatus(404);

        if (this.possibleMiddlewares.includes(splitUrl[0])) {
            req.originalUrl = req.originalUrl.replace('/'+splitUrl[0], '')
            req.middleware = splitUrl[0]
        } else {
            res.sendStatus(404)
        }
        
    }

}

module.exports = new MiddleWare()