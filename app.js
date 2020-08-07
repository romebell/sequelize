const db = require('./models');

db.user.create({
    firstName: 'Rome',
    lastName: 'Bell',
    age: 32,
    email: 'rome.bell@generalassemb.ly'
});