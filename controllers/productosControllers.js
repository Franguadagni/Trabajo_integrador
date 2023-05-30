//const maquillaje = require("../db/moduloDatos") // require los datos 
//listaProductos = maquillaje.productos
//listaComentarios = maquillaje.comentarios
//listaUsuario = maquillaje.usuario
const db = require('../database/models/index')
const op = db.sequelize.Op
const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        db.Producto.findByPk(id, {raw: true})
        .then(function(data){
            res.render('product', {
                usuarioLogueado:false,
                producto: data
            })
        })
        .catch(function(err){
            console.log(err)
        })
        /* return res.send('No existe el producto que pediste') */
    },
    agregados: function(req,res){
        res.render ("product-add",{
            datosUsuario: listaUsuario,
            userlogueado : true
        })
    },
    busqueda: function(req, res){
          let loQueBusca = req.query.search
          db.Producto.findAll({
            where: { [op.or]: [
                { nombre: { [op.like]: `%${loQueBusca}%` } },
                { descripcion: { [op.like]: `%${loQueBusca}%` } }
              ]
            },
            order: [['createdAt', 'DESC']],
            raw: true,
            include:[
                {association: 'productos_usuarios'},
                {association: 'productos_comentarios'}]
          })
          .then(function(resultados){
            if (resultados.length == 0){
               encontroResultados = false
            } else{
                encontroResultados = true
            }
            res.render("search-results",
                {
                  userlogueado : false,
                  busqueda: loQueBusca,
                  resultados: resultados,
                  encontroResultados: encontroResultados
               })
          })
         


          /* for(let i = 0; i< listaProductos.length; i++){
              if (listaProductos[i].id == indice){
                  res.render("product",{
                      detalleProducto: listaProductos[i],
                      listadoComentarios: listaComentarios,
                      userlogueado : false
                  })
              }
          }
          return res.send('No existe el producto que pediste') */
      }
    
}

module.exports = controlador