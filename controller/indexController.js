const user = require('../model/User')

class indexController {

    async indexAction() {
        return await user.getUsers()
    }

}

module.exports = new indexController()