const db = require('../database/models/index')
const op = db.sequelize.Op
let bcrypt = require('bcryptjs')
const controlador = {
    register: function(req,res){
        res.render("register", 
        {
          /*   userlogueado : false, */
        })
        
    },
    login: function(req,res){
        res.render("login",{
           /*  userlogueado : false, */
        })
        },
    profile: function(req,res){
        let id = req.session.user.id
        db.Usuario.findByPk(id, {
            nest:true,
            include:[
                {association:'productos_usuarios'}, 
                {association:'usuarios_comentarios' }   //falta q los productos sean en orden de ultimo agregado   
            ]
        })
        .then(function(user){

        res.render("profile",{dataUser:user})
        //    console.log(user)
            // res.send(user)
        })
        .catch(function(err){
            console.log(err)
        })
       
    },
    profileEdit: function(req,res){
        let id = req.session.user.id 
        db.Usuario.findByPk(id)
        .then(function(user){
            res.render("profile-edit",{
                user: user
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    create: function(req,res){
    let {email, nombre, password,fecha_de_nacimiento,dni, foto_de_perfil}= req.body
    // db.Usuario.findOne({
    //     where:{
    //         email:email
    //     }})  

    if(email== ''){
            let errors = {};
            errors.message= "El email no puede estar vacio";
            res.locals.errors = errors
            res.render('register', );
        }else if(password=='' ){
            let errors = {};
            errors.message= "La contraseña no puede estar vacia";
            res.locals.errors = errors
            res.render('register');
        }else if (password.length<3){
            let errors = {};
            errors.message= "La contraseña debe tener mas de tres digitos";
            res.locals.errors = errors
            res.render('register');
        }
        else{
            let passEncriptada = bcrypt.hashSync(password, 12)
            db.Usuario.create({email,nombre,password:passEncriptada,fecha_de_nacimiento,dni, foto_de_perfil})
            .then(function(data){
                console.log(data)
                res.redirect('/users/login')
                })
            .catch(function(err){
                    console.log(err)
                    if(err.name = 'SequelizeUniqueConstraintError'){
                        let errors = {}
                        errors.message = 'ya existe un usuario con este email'
                        res.locals.errors = errors
                        res.render('register');
                    }
                  }) 
        }

    }, 
checkUser: function(req,res){
        let {email, password, rememberMe} = req.body
        db.Usuario.findOne({
            where:[
                {email:email}
            ],
            raw:true
        })
        .then(function(user){
        //let comparacionPassword = bcrypt.compareSync(password, user.password)
        if(true){
            req.session.user = {
            id: user.id,
            name: user.nombre,
            email:user.email}

        if(rememberMe === 'on'){
        res.cookie(
        'rememberUser', 
        {
            id: user.id,
            name: user.nombre,
            email:user.email
        },
        {
        maxAge: 1000 * 60 * 15
    })}
    res.redirect('/users/profile')}
    })},
    update: function(req,res){
        let id = req.session.user.id 
        let {nombre, email} = req.body
        db.Usuario.update({
            nombre: nombre,
            email: email
        }, {
            where: [
                {id:id}
            ]
        })
        .then(function(res){
           res.redirect('/users/profile' ) 
        })
        .catch(function(err){
            console.log(err)
        })
    },
    // delete: function(req,res){
    //     let id = req.session.user.id
    //     db.Users.destroy({
    //         where:{
    //             id: id
    //         }
    //     })
    //     .then(function(resp){
    //         resp.redirect('/')
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // },
   
}



module.exports = controlador