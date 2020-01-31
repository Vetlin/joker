const routes = require('../config/routes');

class Router {

    constructor(routes) {
        this.routes = routes
        this.routeNotFound = {
            'controller': 'error',
            'action': 'pageNotFound',
        }
        this.serverError = {
            'controller': 'error',
            'action': 'serverError',
        }
    }

    run(url) {

        let route = this.parseRoute(url)

        let controller;
        try {
            controller = require(`../controller/${route.controller}Controller`);
            return controller[`${route.action}Action`]()
        } catch (error) {
            controller = require(`../controller/${this.serverError.controller}Controller`);
            return controller[`${this.serverError.action}Action`]()
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