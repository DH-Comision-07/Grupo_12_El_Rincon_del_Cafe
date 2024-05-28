const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
let db = require('../model/db/models');
let usersService = {
  //users: [],

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
  findByField: async function (field, value) {
    try {
      const user = await db.Usuarios.findOne({ where: { [field]: value } });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  save: async function (user) {
    try {
      // Si no se proporciona una imagen, establecer una imagen por defecto
      if (!user.userImage || user.userImage.trim() === '') {
        user.userImage = '/images/users/image-default.png';
      } else {
        // Si se proporciona una imagen, construir la ruta a la imagen
        user.userImage = '/images/users/' + user.userImage;
      }

      let userCreate = await db.Usuarios.create(user);
      return userCreate.dataValues;
    } catch (error) {
      console.log(error);
    }
  },
  saveUsers: function (users) {
    const usersDBPath = path.join(__dirname, './usersDataBase.json');
    fs.writeFileSync(usersDBPath, JSON.stringify(users, null, 2));
  },

  update: async function (body, id, imagename) {
    let user = await this.getOneBy(id);
    let filename = body.imageProfile ? imagename : user.userImage;
    try {
      let updatedUser = {
        id: body.id || user.id,
        accessType: body.accessType || user.accessType,
        email: body.email || user.email,
        firstName: body.firstName || user.firstName,
        lastName: body.lastName || user.lastName,
        userImage: filename,
        password: body.password
          ? bcryptjs.hashSync(body.password, 10)
          : user.password,
        birthDate: body.birthDate || user.birthDate,
      };
      await db.Usuarios.update(updatedUser, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  deleteUser: async function (id) {
    let users = await this.getAll();
    let user = await db.Usuarios.findOne({
      where: { id: id },
    });
    if (!user) {
      console.log('No se encontró el usuario');
      return users;
    }
    try {
      // Solo eliminar la imagen si no es la imagen por defecto y si el archivo realmente existe
      let imagePath = path.resolve(__dirname, '../../public' + user.userImage);
      let defaultImagePath = path.resolve(
        __dirname,
        '../../public/images/users/image-default.png'
      );
      if (imagePath !== defaultImagePath && fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
      await user.destroy();
    } catch (error) {
      console.log(error);
    }
    return users.filter((user) => user.id != id);
  },
  // function User(data, filename) {
  //   return {
  //     id: data.id || null,
  //     accessType: data.accessType || 'user',
  //     email: data.email || '',
  //     firstName: data.firstName || '',
  //     lastName: data.lastName || '',
  //     userImage: filename,
  //     password: bcryptjs.hashSync(data.password, 10) || '',
  //     birthDate: data.birthDate || '',
  //   };
  // }
};
module.exports = usersService;
