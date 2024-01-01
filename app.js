const express = require('express')
const app=express()

require('dotenv').config()

app.use(express.json())
const mainRouter=require('./routes/main')

const port=process.env.PORT || 3003


app.use('/api/v1', mainRouter);

const start = () =>{

try{
    app.listen(port,()=>{
        console.log(`Server is listening on port : ${port}`)
    })
}

catch(error){
console.log(error)
} 


}


start()


