/**
 * Summary. Contains post model 
 *
 * Description. This is the set of methods post models
 *  operations.  
 *
 * @author Sashi
 * @since  10/11/2021
 */

 const mongoose = require('mongoose');
 const userQuerySchema = mongoose.Schema({
     firstname: { type: String, required},
     lastname: { type: String },
     date: {type: Date},
     email: { type: String }
 });
 const User=mongoose.model("User", userQuerySchema);
 module.exports = User