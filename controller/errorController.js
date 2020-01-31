class errorController {

    pageNotFoundAction() {
        return 'Error 404!'
    }

    serverErrorAction() {
        return 'Server Error!'
    }

}

module.exports = new errorController()