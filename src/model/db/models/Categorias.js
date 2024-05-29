let modelCategoria = (sequelize, DataTypes) => {
  let Categorias = sequelize.define(
    "Categorias",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "categoria",
      timestamps: false,
    }
  );

  Categorias.associate = (model) => {
    Categorias.hasMany(model.Productos, {
      as: "categoriaProductos",
      foreignKey: "categoryId",
    });
  };

  return Categorias;
};

module.exports = modelCategoria;
