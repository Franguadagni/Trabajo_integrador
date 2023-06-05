//const maquillaje = require("../db/moduloDatos") // require los datos 
//listaProductos = maquillaje.productos
//listaComentarios = maquillaje.comentarios
//listaUsuario = maquillaje.usuario
const db = require('../database/models/index')
let op = db.Sequelize.Op

const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        db.Producto.findByPk(
            id,
            
            {
                include:[
                    {association: 'Comments'}
                ]
            })
        .then(function(data){
            console.log(data)
            
            // res.send(data)
            db.Comentario.findAll(
                {
                    include:[
                        {association: 'comentarios_usuarios'},
                        /* {association: 'Comments'} */
                      ]
                }
            )
            .then(function(info){
                info: info
                let usuarioId = data.Comments.usuarios_id 
                // res.send(info)
                for (i=0; i<info.length; i++){
                    if (usuarioId==info[i].usuarios_id){
                        let nombre = info[i].comentarios_usuarios.nombre
                        let foto_de_perfil = info[i].comentarios_usuarios.foto_de_perfil
                        res.render('product', {
                            userlogueado : false,
                            producto: data,
                            nombre: nombre,
                            foto_de_perfil: foto_de_perfil,
                        })
                    }
                }
            })
           
        })
        .catch(function(err){
            console.log(err)
        })
        /* return res.send('No existe el producto que pediste') */
    },
    agregados: function(req,res){
        res.render ("product-add",{
            /* datosUsuario: listaUsuario, */
            userlogueado : true
        })
    },
    create: function(req,res){
        db.Producto.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
    ,

    busqueda: function(req, res){
          let loQueBusca = req.query.search
          db.Producto.findAll({
            where: { 
                [op.or]: [
                { nombre: { [op.like]: `%${loQueBusca}%` } },
                { descripcion: { [op.like]: `%${loQueBusca}%` } }
              ]
            },
            order: [['created_at', 'DESC']],
            raw: true,
            nest:true,
            include:[
                {association: 'productos_usuarios'},
               /*  {association: 'Comments'} */]
          })
          .then(function(resultados){
            // res.send(resultados)
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
            .catch(function(err){
                console.log(err)
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