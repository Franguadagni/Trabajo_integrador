listaProductos = 'los datos de los productos' // require los datos de algun lado 
const controlador = {
    index: function(req,res){
        res.render('pagPrincipal' ,{
          listadoProductos: listaProductos
        })
    },
    detalle: function(req,res){
        let indice = req.params.id
        for(let i = 0; i< listaProductos.length; i++){
            if (listaProductos[i].id == indice){
                res.render('product',{
                    detalleProducto: listaProductos[i]
                    
                })
            }
        }
        return res.send('No existe el producto que pediste')
    },
}

module.exports = controlador