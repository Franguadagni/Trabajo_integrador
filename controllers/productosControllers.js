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
                {association: 'productos_usuarios'},
                ],
                order: [['Comments', 'id','DESC']]
            })
        .then(function(producto){
            /* res.send(producto)  */
            let productoDeLogeado
            if (req.session.user !== undefined){
               if(req.session.user.id !== producto.usuarios_id){
                productoDeLogeado = false
               }else {
                productoDeLogeado = true
               }
            } else {
                productoDeLogeado = false
            }
            res.render('product', {
                producto:producto,
                comentarios: producto.Comments,
                productoDeLogeado
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    agregados: function(req,res){
        res.render ("product-add")
    },
    create: function(req,res){
        let id = req.session.user.id
        let {imagen,nombre,descripcion} = req.body
        db.Producto.create({
            image: imagen,
            nombre,
            descripcion,
            usuarios_id: id
        })
        .then(function(data){
            res.redirect('/users/profile')
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
                {association: 'productos_usuarios'},]
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
        let id = req.params.id
        db.Producto.findByPk(id)
        .then(function(producto){
            res.render('product-edit', {producto:producto})
        })
        .catch(function(err){
            console.log(err)
          })
      },
    update: function(req,res){
        let {imagen,nombre, descripcion, id} = req.body
        console.log(id)
        db.Producto.update({
            image: imagen,
            nombre: nombre,
            descripcion: descripcion
        },
            {
            where: {
                id:id
            }
        })
        .then(function(response){

           res.redirect('/productos/detalle/' 
           + id ) 
        })
        .catch(function(err){
            console.log(err)
        })
      },
    delete: function(req,res){
        let {id} = req.body
        db.Producto.destroy({
            where:{
                id: id
            }
        })
        .then(function(response){
            res.redirect('/users/profile')
        })
        .catch(function(err){
            console.log(err)
        })
    },

    crearComment: function(req,res){
        let id_usuario = req.session.user.id
        let id_producto = req.params.id
        let {comentario} = req.body
        db.Comentario.create({
           comentarios: comentario,
           usuarios_id: id_usuario,
           productos_id : id_producto
        })
        .then(function(data){
            res.redirect('/productos/detalle/' + id_producto)
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controlador