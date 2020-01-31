const routes = require('../config/route');

class Router {

    constructor(routes) {

        // Routes
        this.routes = routes

        // Error routes
        this.routeNotFound = {
            'controller': 'error',
            'action': 'pageNotFound',
        }
        this.serverError = {
            'controller': 'error',
            'action': 'serverError',
        }
    }

    async run(url) {
        
        try {
            let route = this.parseRoute(url)
            return await require(`../controller/${route.controller}Controller`)[`${route.action}Action`]();
        } catch (error) {
            console.log(error)
            return require(`../controller/${this.serverError.controller}Controller`)[`${this.serverError.action}Action`]();
        }

    }

    parseRoute(url) {

        if (!this.routes[url]) return this.routeNotFound

        let route = this.routes[url]
        
        let split = route.split('/');

        if (split.length !== 2) return this.serverError

        return {
            'controller': split[0],
            'action': split[1],
        }
    }

}

module.exports = new Router(routes)