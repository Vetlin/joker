const Controller = require('./Controller')

class csvController extends Controller {

    async getUsersAction() {
        let users = await this.db.query('SELECT * FROM users')
        console.log(users)
        return 'Get Users'
    }

}

module.exports = new csvController()