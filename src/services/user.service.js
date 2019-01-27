const User = require('../models/user.model.');
const uuid = require('uuid/v4');
const faker = require('faker');

module.exports = {
  getAll(){
    return User.scan().exec();
  },

  createOne() {
    const newUser = new User({
      id: uuid(),
      firstName: faker.internet.userName(),
      email: faker.internet.email(),
    });

    return newUser.save();
  },
};