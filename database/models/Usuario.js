module.exports = function (sequelize,DataTypes){
    let alias= "Usuario"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull: true
        },
        email: {
            type:DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password:{
            allowNull: true,
            type:DataTypes.STRING
        },
        foto_de_perfil:{
            type:DataTypes.STRING,
        },
        dni:{
        type:DataTypes.INTEGER,
        allowNull: true,
        unique:true
        }
    }
    let config= {
        tableName:"usuarios",
        timestamps: false,
        underscored:true

    }
    const Usuario = sequelize.define(alias,columnas,config)

    Usuario.associate = function(models){
        Usuario.hasMany(models.Comentario, {
            as:"usuarios_comentarios",
            foreignKey: "usuarios_id",
        }),
        Usuario.hasMany(models.Producto,{
            as:"productos_usuarios",
            foreignKey: "usuarios_id"
        })
    }

    return Usuario
}