const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
let db = require("../model/db/models");
let usersService = {
  users: [],

  getAll: async function () {
    try {
      return await db.Usuarios.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  getOneBy: async function (id) {
    try {
      return await db.Usuarios.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },
  findByField: async function (field, text, password) {
    let userByField = db.Usuarios.findOne({
      where: { [field]: text },
    });

    if (userByField) {
      let validPassword = bcryptjs.compareSync(password, userByField.password);
      if (validPassword) {
        // delete userByField.password;
        req.session.userLogged = userByField;

        if (req.body.rememberMe) {
          res.cookie("email", req.body.email, { maxAge: 1000 * 60 });
        }
      }
    }
    return userByField;
  },
  save: async function (user) {
    try {
      let usuario = new User(user);
      let userCreate = await db.Usuarios.create(usuario);
      return userCreate.dataValues;
    } catch (error) {
      console.log(error);
    }
  },
  saveUsers: function (users) {
    const usersDBPath = path.join(__dirname, "./usersDataBase.json");
    fs.writeFileSync(usersDBPath, JSON.stringify(users, null, 2));
  },

  update: async function (body, id, imagename) {
    let user = usersService.getOneBy(id);
    let filename = body.imageProfile ? imagename : user.userImage;

    try {
      let usuarios = new User(body, filename);
      await db.Usuarios.update(usuarios, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      return [];
    }

    usersService.update(body, id, filename);

    // let userIndex = this.users.findIndex((user) => user.id == id);
    // if (userIndex != -1) {
    //   this.users[userIndex].accessType =
    //     body.accessType || this.users[userIndex].accessType;
    //   this.users[userIndex].email = body.email || this.users[userIndex].email;
    //   this.users[userIndex].firstName =
    //     body.firstName || this.users[userIndex].firstName;
    //   this.users[userIndex].lastName =
    //     body.lastName || this.users[userIndex].lastName;
    //   this.users[userIndex].userImage =
    //     imagename || this.users[userIndex].userImage;
    //   this.users[userIndex].password =
    //     body.password && body.password !== this.users[userIndex].password
    //       ? bcrypt.hashSync(body.password, 10)
    //       : this.users[userIndex].password;
    //   this.users[userIndex].birthDate =
    //     body.birthDate || this.users[userIndex].birthDate;
    //   fs.writeFileSync(
    //     path.resolve(__dirname, "../data/usersDataBase.json"),
    //     JSON.stringify(this.users)
    //   );
    // }
    // return this.users;
  },
  deleteUser: async function (id) {
    let users = await db.Usuarios.getAll();
    let user = await db.Usuarios.findOne({
      where: { id: id },
    });
    if (!user) {
      console.log("No se encontró el usuario");
      return users;
    }
    try {
      fs.unlinkSync(
        path.resolve(__dirname, "../../public/images/users/" + user.userImage)
      );
      user.destroy();
    } catch (error) {
      console.log(error);
    }

    if (user.userImage !== "default.jpg" && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    this.users = users.filter((user) => user.id != id);
    this.saveUsers(this.users);
  },
};

function User(data, filename) {
  return {
    id: data.id || null,
    accessType: data.accessType || "user",
    email: data.email || "",
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    userImage: filename,
    password: bcryptjs.hashSync(data.password, 10) || "",
    birthDate: data.birthDate || "",
  };
}

module.exports = usersService;
