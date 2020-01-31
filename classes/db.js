const mysql = require('mysql2');

const DB = class {

    async connect() {
        const db = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.DB_PASS,
            database: process.DB_NAME,
        });
        this.db = db;
    }

    async query(sql, params = []) {
        let res = await this.db.execute(sql, params);
        return res[0];
    }

    getDb() {
        return this.db
    }

}

const db = new DB();
db.connect();

db.getDb().query('SELECT * FROM users', function(e, r, f) {
    console.log(e)
    console.log(r)
    console.log(f)
})

module.exports = db