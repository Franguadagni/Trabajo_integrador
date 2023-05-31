module.exports = function (sequelize,DataTypes){
    let alias= "Comentario"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        usuarios_id:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        },
        comentario:{
            type:DataTypes.STRING,
            allowNull:true
        },
    }
    let config= {
        tableName:"comentarios",
        timestamps: true,
        underscored:true

    }
    const Comentarios = sequelize.define(alias,columnas,config)

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Usuario, {
            as: "comentarios_usuarios",
            foreignKey: "usuarios_id",
            timestamps: false,
        })
        Comentarios.belongsTo(models.Producto, {
            as: "Products",
            foreignKey: "productos_id",
            timestamps: false,
        })
    }
    return Comentarios
}