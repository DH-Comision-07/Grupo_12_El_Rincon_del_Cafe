const fs = require('fs');
const path = require('path');
let users = require('../data/usersDataBase.json');

let usersService = {
  users: users,

  getAll: function () {
    return this.users;
  },

  getOneBy: function (id) {
    return this.users.find((user) => user.id == id);
  },
};

module.exports = usersService;
