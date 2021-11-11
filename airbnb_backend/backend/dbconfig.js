/**
 * Summary. Contains connection of mongodb
 *
 * Description. This is the set of methods for usage of mongodb
 *  operations.  
 *
 * @author Sashi
 * @since 10/11/2021
 */

// npm dependencies
const express = require("express");


// initializing an express application
const app = express();

//internal dependencies
const userQuery = require("../models/signupModel");
const mongoose = require("mongoose");


const url="mongodb+srv://schandra:Sashi@cluster0.8jkos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const conn=mongoose.connection;

conn.once("open",function(){
    console.log("Database connected successfully");
})
