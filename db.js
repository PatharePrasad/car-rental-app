const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://messipique22:Piquessi103@cluster0.ih65dry.mongodb.net/', {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose