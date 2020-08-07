const db = require('./models');
const { query } = require('express');

db.user.create({
    firstName: 'Rob',
    lastName: 'Bell',
    age: 31,
    email: 'robemail@email.com'
}).then(data => {
    console.log(data);
}); 

// search by id
db.user.findOne({
    where: { id: 1 }
}).then(user => {
    console.log('==== user 1 ===');
    console.log(user.dataValues);
});

// search by name
db.user.findOne({
    where: { firstName: 'Rob'}
}).then(user => {
    console.log('==== user 2 ===');
    console.log(user.dataValues);
});

// search by email
db.user.findOne({
    where: { email: 'rome.bell@generalassemb.ly'}
}).then(user => {
    console.log('==== user 3 ===');
    console.log(user.dataValues);
});

db.user.findOrCreate({
    where: {
        firstName: 'Kevin',
        lastName: 'Johnson'
    },
    defaults: { age: 40, email: 'kv@email.com'}
}).then(([user, created]) => {
    console.log(`This was created on ${created}`);
    console.log(user.dataValues);
});

let queryOne = {
    where: {
        firstName: 'John',
        lastName: 'Smith'
    },
    defaults: { age: 25, email: 'jsjs@gmail.com'}
};

db.user.findOrCreate(queryOne)
.then(([user, created]) => {
    console.log(created);
    console.log(user.dataValues);
});

db.user.findAll()
.then(users => {
    for (let i = 0; i < users.length; i++) {
        let eachUser = users[i].dataValues;
        // console.log(eachUser);
        let firstName = eachUser.firstName;
        console.log(firstName);
    }
});