const Model = require('./Model')

class User extends Model {

    async getUsers() {
        return await this.db.query('SELECT * FROM users')
    }

}

module.exports = new User();