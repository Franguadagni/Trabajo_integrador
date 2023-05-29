//const maquillaje = require("../db/moduloDatos") // require los datos 
//listaProductos = maquillaje.productos
//listaComentarios = maquillaje.comentarios
//listaUsuario = maquillaje.usuario
const db = require('../database/models/index')
const op = db.sequelize.Op
const controlador = {
    detalle: function(req,res){
        let indice = req.params.id
        db.Producto.findByPk(id, {raw: true})
        .then(function(data){
            res.render('comentarios', {
                usuarioLogueado:false,
                producto: data
            })
        })
        for(let i = 0; i< listaProductos.length; i++){
            if (listaProductos[i].id == indice){
                res.render("product",{
                    detalleProducto: listaProductos[i],
                    listadoComentarios: listaComentarios,
                    userlogueado : false
                })
            }
        }
        return res.send('No existe el producto que pediste')
    },
    agregados: function(req,res){
        return res.render ("product-add",{
            datosUsuario: listaUsuario,
            userlogueado : true
        })
    },
    busqueda: function(req, res){
          let indice = req.params.id
          for(let i = 0; i< listaProductos.length; i++){
              if (listaProductos[i].id == indice){
                  res.render("product",{
                      detalleProducto: listaProductos[i],
                      listadoComentarios: listaComentarios,
                      userlogueado : false
                  })
              }
          }
          return res.send('No existe el producto que pediste')
      }
    
}

module.exports = controlador