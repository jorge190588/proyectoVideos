'use strict';

const connection = require('./conexion');

class AuthModel{
    getUser(user, cb)
    {
        connection.query('SELECT * FROM auth WHERE email = ? AND password = ?', [user.email, user.password], cb);       
    }

    setUser(user, cb)
    {
        connection.query('INSERT INTO auth SET ?', user, cb);        
    }
}

module.exports = new AuthModel;