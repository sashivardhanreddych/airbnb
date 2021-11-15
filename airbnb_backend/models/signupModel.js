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
     countryCode: {type: String, required: true},
     phone: { type: Number, required:true},
     firstname: { type: String, required:true},
     lastname: { type: String, required:true },
     birthdate: {type: Date, required:true},
     email: { type: String, required:true }
 });
 const User_info=mongoose.model("User_info", userPersonalInfoSchema);
 module.exports = User_info;