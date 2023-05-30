module.exports = function (sequelize,DataTypes){
    let alias= "comentarios"
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
        timestamps: true
    }
    const Comentarios = sequelize.define(alias,columnas,config)

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.usuarios, {
            as: "comentarios_usuarios",
            foreignKey: "usuarios_id",
            timestamps: false,
        })
        Comentarios.belongsTo(models.Producto, {
            as: "comentarios_productos",
            foreignKey: "productos_id",
            timestamps: false,
        })
    }
    return Comentarios
}