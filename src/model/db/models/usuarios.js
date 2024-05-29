let modelUsuario = (sequelize, DataTypes) => {
  let Usuarios = sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accessType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userImage: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: DataTypes.DATE,
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
  return Usuarios;
};

module.exports = modelUsuario;
