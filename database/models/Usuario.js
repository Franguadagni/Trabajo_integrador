module.exports = function (sequelize,DataTypes){
    let alias= "usuarios"
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
        timestamps: false
    }
    const Users = sequelize.define(alias,columnas,config)

    Users.associate = function(models){
        Users.hasMany(models.comentarios, {
            as:"usuarios_comentarios",
            foreignKey: "usuarios_id",
        }),
        Users.hasMany(models.Producto,{
            as:"usuarios_productos",
            foreignKey: "usuarios_id"
        })
    }

    return Users
}