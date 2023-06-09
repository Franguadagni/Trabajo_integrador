module.exports = function (sequelize,DataTypes){
    let alias= "Producto"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        usuarios_id: {
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
        },
        image: {
            type: DataTypes.STRING
        }
    }
    let config= {
        tableName:"productos",
        timestamps: true,
        underscored:true
    }
    const Producto = sequelize.define(alias,columnas,config)

    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario,{
            as: "productos_usuarios",
            foreignKey: "usuarios_id",
        })
        Producto.hasMany(models.Comentario,{
            as: "Comments",
            foreignKey: "productos_id"
        }) 
    }
    return Producto
}