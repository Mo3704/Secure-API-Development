const db = require('../db/config.js');

class User {
    static create(user, callback) {
        const query = 'INSERT INTO Users (name, username, password) VALUES (?, ?, ?)';
        db.query(query, [user.name, user.username, user.password], callback);
    }

    static findByUsername(username, callback) {
        const query = 'SELECT * FROM Users WHERE username = ?';
        db.query(query, [username], callback);
    }
}

module.exports = User;