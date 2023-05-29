module.exports = function (sequelize,DataTypes){
    let alias= "productos"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        usuario_id: {
            type:DataTypes.INTEGER,
            unsigned: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    let config= {
        tableName:"¨Productos",
        timestamps: true
    }
    const Products = sequelize.define(alias,columnas,config)

    Products.associate = function(models){
        Products.belongsTo(models.usuarios,{
            as: "productos_usuarios",
            foreignKey: "usuarios_id",
        })
    }
    return Products
}