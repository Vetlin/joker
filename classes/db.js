const mysql = require('mysql');

class DB {

    constructor() {
        this.db = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        this.db.connect();
    }

    async query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.query(sql, params, (error, results, fields) => {
                if (error) reject(error);
                resolve(results);
            })
        })
        
    }
    
}

module.exports = new DB()