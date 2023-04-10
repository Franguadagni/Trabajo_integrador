const maquillaje = require("../db/moduloDatos") // require los datos 
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios
listaUsuario = maquillaje.usuario
const controlador = {
    detalle: function(req,res){
      console.log('Llega al detalle')
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
    },
    agregados: function(req,res){
        return res.render ("product-add",{
            datosUsuario: listaUsuario,
            userlogueado : false
        })
    },
    busqueda: function(req, res){
        res.render( 'search-results', {
            listadoProductos:listaProductos,
            userlogueado : false
        }
        )
    }
    
}

module.exports = controlador