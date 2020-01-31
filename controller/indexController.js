const Controller = require('./Controller')

class indexController extends Controller {

    indexAction() {
        return 'Index Action!'
    }

}

module.exports = new indexController()