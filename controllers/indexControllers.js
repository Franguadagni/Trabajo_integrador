const db = require('../database/models/index')
const op = db.sequelize.Op
/* const maquillaje = require("../db/moduloDatos") // require los datos 
listaUsuario = maquillaje.usuario
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios */
const controlador = {
    index: function(req,res){
      db.Producto.findAll({
        order:[
          ['id', 'DESC'],
        ],
        raw: true,
        nest:true,
            include:[
                {association: 'productos_usuarios'},
                {association: 'productos_comentarios'}]
      })
      .then(function(data){
        res.render("pagPrincipal" ,{
          /* listadoProductos: listaProductos,
          listadoComentarios: listaComentarios,
          listadoUsuarios: listaUsuario, */
          productos: data,
          userlogueado : false,
        })
      })
      .catch(function(err){
        console.log(err)
      })
    },
}

module.exports = controlador