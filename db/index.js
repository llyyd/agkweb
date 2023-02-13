const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'agk',
})

db.async = {}

db.async.query = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

module.exports = db