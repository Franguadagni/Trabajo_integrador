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
                    {association: 'Comments',
                    include: [{association: 'comentarios_usuarios'}]
                }, 
                {association: 'productos_usuarios'}
                ],
                /* raw: true,
                nest:true, */
            })
        .then(function(producto){
            //res.send(producto) 
            res.render('product', {
                producto:producto,
                comentarios: producto.Comments,

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
        let {imagen,nombre,descripcion} = req.body
        db.Producto.create({
            image: imagen,
            nombre: nombre,
            descripcion: descripcion,

            //falta relacion con las tablas?
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
                  /* userlogueado : false, */
                  busqueda: loQueBusca,
                  resultados: resultados,
                  encontroResultados: encontroResultados
               })
            })
            .catch(function(err){
                console.log(err)
              })
        
      },
    productEdit: function(req,res){
        res.render('product-edit')
      },
    update: function(req,res){
        // let id = req.session.user.id 
        let {imagen,nombre, descripcion} = req.body
        db.Producto.update({
            image: imagen,
            nombre: nombre,
            descripcion: descripcion, 
        // }, {
        //     where: [
        //         {id:id}
        //     ]
        })
        .then(function(res){
           res.redirect('/' ) 
        })
        .catch(function(err){
            console.log(err)
        })
      },
    delete: function(req,res){
        // let id = req.session.user.id
        db.Producto.destroy({
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    },
    comment_add: function(req,res){
        res.render("comment-add")
    },
    crearComment: function(req,res){
        // let id = req.session.user.id
        let {comentario} = req.body
        db.Comentario.create({
           comentario: comentario
            //falta relacion con las tablas?
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controlador