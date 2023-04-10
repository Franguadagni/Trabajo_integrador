const maquillaje = require("../db/moduloDatos")
listaUsuario = maquillaje.usuario
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios

const controlador = {
    register: function(req,res){
        res.render("register", 
        {
            userlogueado : false,
        })
        
    },
    login: function(req,res){
        res.render("login",{
            userlogueado : false,
        })
        },
    profile: function(req,res){
        res.render("profile",{
            datosUsuario: listaUsuario,
            listadoProductos: listaProductos,
            listadoComentarios: listaComentarios,
            userlogueado : false,
        })
    },
    profileEdit: function(req,res){
        res.render("profile-edit",{
            datosUsuario: listaUsuario,
            userlogueado : false,
        })
    }
}



module.exports = controlador