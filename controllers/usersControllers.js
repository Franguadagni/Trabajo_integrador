/* const maquillaje = require("../db/moduloDatos")
listaUsuario = maquillaje.usuario
listaProductos = maquillaje.productos
listaComentarios = maquillaje.comentarios */
const db = require('../database/models/index')
const op = db.sequelize.Op
let bcrypt = require('bcryptjs')
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
        let id = req.params.id //hacerlo con session?
        db.Usuario.findByPk(id)
        .then(function(usuario){
            res.render("profile",{
                usuario: usuario,
                userlogueado : true,
            })
        })
       
    },
    profileEdit: function(req,res){
        let id = req.params.id
        db.Usuario.findByPk(id)
        .then(function(usuario){
            res.render("profile-edit",{
                /* datosUsuario: listaUsuario, */
                userlogueado : true,
                usuario: usuario
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    create: function(req,res){
        let {email, nombre, password,fecha_de_nacimiento,dni}= req.body
        let errors = {};
        if(email== ''){
            errors.message= "El email no puede estar vacio";
            res.locals.errors = errors
            return res.render('register', {userlogueado :false});
        }
        else if(password==''){
            errors.message= "La contraseña no puede estar vacia";
            res.locals.errors = errors
            return res.render('register', {userlogueado :false});
        }
        else if (password.length<3){
            errors.message= "La contraseña debe tener mas de tres digitos";
            res.locals.errors = errors
            return res.render('register',{userlogueado :false});
        }
        else{
            let passEncriptada = bcrypt.hashSync(password, 12)
            db.Usuario.create({email,nombre,password:passEncriptada,fecha_de_nacimiento,dni})
            .then(function(data){
                console.log(data)
                res.redirect('/users/profile')
            })
            .catch(function(err){
                console.log(err)
              })
        }  },

            // db.Usuario.findOne({
            //     where: [
            //         {email: email}]}
            // )
            // .then(function(persona){
            //     if (persona != null){
            //         //creo usuario
            //         let passEncriptada = bcrypt.hashSync(password, 12)
            //         db.Usuario.create({email,nombre,password:passEncriptada,fecha_de_nacimiento,dni})
            //     }else{
            //         errors.message= "El email no puede ser repetido";
            //         res.locals.errors = errors
            //         return res.render('register',{userlogueado :false});
            //     }
            // })
         //hacer todas las validaciones q pide la consigna
       

  
    checkUser: function(req,res){
        let {email, password} = req.body
        db.Usuario.findOne({
            where:[
                {email:email}
            ],
            raw:true
        })
        .then(function(user){
            let comparacionPassword = bcrypt.compareSync(password, user.password)
            if(comparacionPassword){
                //completar con lo de session
            }
        })
    },
    update: function(req,res){
        let id = req.params.id
        let {nombre, email} = req.body
        db.Usuario.update({
            nombre: nombre,
            email: email
        }, {
            where: [
                {id:id}
            ]
        })
        .then(function(resp){
           /*  res.redirect('/users/profile/' + id) */
        })
        .catch(function(err){
            console.log(err)
        })
    }
}



module.exports = controlador