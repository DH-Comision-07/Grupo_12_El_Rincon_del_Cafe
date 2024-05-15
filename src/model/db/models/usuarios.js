module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
    "usuarios",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      accessType: DataTypes.STRING,
      email: DataTypes.STRING,
      userImage: DataTypes.STRING,
      password: DataTypes.STRING,
      birthDate: DataTypes.DATE,
    },
    {}
  );
  return usuarios;
};
