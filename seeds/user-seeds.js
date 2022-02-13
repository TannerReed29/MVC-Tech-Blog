const { User } = require('../models');

const userdata = [
  {
    username: 'test',
    password: '1234'
  },
  {
    username: 'test1',
    password: '1111'
  },
  {
    username: 'admin',
    password: '1111'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
