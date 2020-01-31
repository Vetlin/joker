const Controller = require('./Controller')

class errorController extends Controller {

    pageNotFoundAction() {
        return 'Error 404!'
    }

    serverErrorAction() {
        return 'Server Error!'
    }

}

module.exports = new errorController()