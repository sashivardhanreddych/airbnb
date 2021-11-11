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
 const userPersonalInfoSchema = mongoose.Schema({
     firstname: { type: String, required:true},
     lastname: { type: String },
     birthdate: {type: Date},
     email: { type: String }
 });
 const User_info=mongoose.model("User_info", userPersonalInfoSchema);
 module.exports = User_info;