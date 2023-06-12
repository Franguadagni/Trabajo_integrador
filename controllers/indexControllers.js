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
            /* {association: 'Comments'} */
          ]
      })
      .then(function(data){
        res.render("pagPrincipal" ,{
          /* listadoProductos: listaProductos,
          listadoComentarios: listaComentarios,
          listadoUsuarios: listaUsuario, */
          productos: data,
          userlogueado : false,
        })
        /* res.send(data) */
      })
      .catch(function(err){
        console.log(err)
      })
    },
    logout: function(req,res){
      req.session.user = undefined
      res.redirect('/')
    }
  
}

module.exports = controlador