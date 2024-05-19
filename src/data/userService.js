const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
let db = require("../model/db/models");
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
      path.resolve(__dirname, "../data/usersDataBase.json"),
      JSON.stringify(this.users)
    );
  },
  saveUsers: function (users) {
    const usersDBPath = path.join(__dirname, "./usersDataBase.json");
    fs.writeFileSync(usersDBPath, JSON.stringify(users, null, 2));
  },
  constructor: function User(data, filename) {
    return {
      id: data.id || null,
      accessType: data.accessType || "user",
      email: data.email || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      userImage: filename,
      password: bcrypt.hashSync(data.password, 10) || "",
      birthDate: data.birthDate || "",
    };
  },
  update: function (body, id, imagename) {
    let userIndex = this.users.findIndex((user) => user.id == id);
    if (userIndex != -1) {
      this.users[userIndex].accessType =
        body.accessType || this.users[userIndex].accessType;
      this.users[userIndex].email = body.email || this.users[userIndex].email;
      this.users[userIndex].firstName =
        body.firstName || this.users[userIndex].firstName;
      this.users[userIndex].lastName =
        body.lastName || this.users[userIndex].lastName;
      this.users[userIndex].userImage =
        imagename || this.users[userIndex].userImage;
      this.users[userIndex].password =
        body.password && body.password !== this.users[userIndex].password
          ? bcrypt.hashSync(body.password, 10)
          : this.users[userIndex].password;
      this.users[userIndex].birthDate =
        body.birthDate || this.users[userIndex].birthDate;
      fs.writeFileSync(
        path.resolve(__dirname, "../data/usersDataBase.json"),
        JSON.stringify(this.users)
      );
    }
    return this.users;
  },
  deleteUser: function (id) {
    const users = this.getAll();
    const user = users.find((user) => user.id == id);
    if (!user) {
      return users;
    }
    const imagePath = path.resolve(
      __dirname,
      "../../public/images/users/" + user.userImage
    );
    if (user.userImage !== "default.jpg" && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    this.users = users.filter((user) => user.id != id);
    this.saveUsers(this.users);
  },
};
module.exports = usersService;
