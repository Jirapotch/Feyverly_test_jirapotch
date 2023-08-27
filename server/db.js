const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "my_db"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports.query = (text) => {
    return new Promise((resolve, reject) => {
        db.query(text, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};