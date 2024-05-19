let modelProducto = (sequelize, DataTypes) => {
  let Productos = sequelize.define(
    "Productos",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "productos",
      timestamps: false,
    }
  );

  Productos.associate = (model) => {
    Productos.belongsTo(model.Categorias, {
      as: "productosCategoria",
      foreignKey: "categoryId",
    });
  };

  return Productos;
};

module.exports = modelProducto;
