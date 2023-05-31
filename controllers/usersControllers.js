/* const maquillaje = require("../db/moduloDatos")
listaUsuario = maquillaje.usuario
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios */
const db = require('../database/models/index')
const op = db.sequelize.Op
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
            /* datosUsuario: listaUsuario,
            listadoProductos: listaProductos,
            listadoComentarios: listaComentarios, */
            userlogueado : true,
        })
    },
    profileEdit: function(req,res){
        res.render("profile-edit",{
            /* datosUsuario: listaUsuario, */
            userlogueado : true,
        })
    },
    create: function(req,res){
       /*  let email = req.body.email
        let username = req.body.username
        let password = req.body.password
        let birthdate = req.body.birthdate
        let dni = req.body.dni */
        let {email, username, password,birthdate,dni}= req.body
    }
}



module.exports = controlador