const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

let users = require('../data/usersDataBase.json');

let usersService = {
  users: users,

  getAll: function () {
    return this.users;
  },

  getOneBy: function (id) {
    return this.users.find((user) => user.id == id);
  },
  findByField: function (field, text) {
    const users = this.getAll();
    const userByField = users.find((user) => user[field] == text);
    return userByField;
  },
  save: function (user) {
    const ultimoId =
      this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
    const nuevoId = ultimoId + 1;
    user.id = nuevoId;
    this.users.push(user);
    fs.writeFileSync(
      path.resolve(__dirname, '../data/usersDataBase.json'),
      JSON.stringify(this.users)
    );
  },
  constructor: function User(data, filename) {
    return {
      id: data.id || null,
      accessType: data.accessType || 'user',
      email: data.email || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      userName: data.userName || '',
      userImage: filename,
      password: bcryptjs.hashSync(data.password, 10) || '',
      birthDate: data.birthDate || '',
    };
  },
};
module.exports = usersService;
