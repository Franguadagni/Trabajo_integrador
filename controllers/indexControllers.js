const maquillaje = require("../db/moduloDatos") // require los datos 
listaUsuario = maquillaje.usuario
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios
const controlador = {
    index: function(req,res){
      console.log('Llega al index')
        res.render("pagPrincipal" ,{
          listadoProductos: listaProductos,
          listadoComentarios: listaComentarios,
          listadoUsuarios: listaUsuario,
          userlogueado : false,
        })
    }
}

module.exports = controladoror