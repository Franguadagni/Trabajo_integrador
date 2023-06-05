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
        comentarios:{
            type:DataTypes.STRING,
            allowNull:true
        },
    }
    let config= {
        tableName:"comentarios",
        timestamps: true,
        underscored:true

    }
    const Comentario = sequelize.define(alias,columnas,config)

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as: "comentarios_usuarios",
            foreignKey: "usuarios_id",
            timestamps: false,
        })
        Comentario.belongsTo(models.Producto, {
            as: "Products",
            foreignKey: "productos_id",
            timestamps: false,
        })
    }
    return Comentario
}