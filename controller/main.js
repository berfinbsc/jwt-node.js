const jwt = require('jsonwebtoken')
const secret_key =process.env.SECRET_KEY

const login = (req,res) =>{

   const {username,password} = req.body

   if(!username || password){
    console.log('please provide email and password')
}

    //validation from databse
    const id = new Date().getDate()
const token =jwt.sign({id,username},secret_key,{expiresIn :'1d'})

res.send(token).status(200)



}

module.exports = login