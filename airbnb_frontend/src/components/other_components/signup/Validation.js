/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 11/11/2021
 * ...
 */

import '../../app/App.css';

/**
* Function that used to validate the field of the forms of various components
* @param    {String}        Data from the user
* @return   {String}        validate success or errors message will render in the browser
*/
const ValidationSignup = (values) => {
    let errors={};
	
    // verifying existence of phone
    if(!values.countryCode){
        errors.countryCode = "Country Code is required";
    }

		// verifying existence of phone
    if(!values.phone){
        errors.phone = "Phone Number is required";
    }

		// verifying existence of first name
    if(!values.firstname){
        errors.firstname="First Name is required";
    }
    else if(!(values.firstname.length>2 && values.firstname.length<20)){
        errors.firstname="First Name must between 3 to 20 characters";
    }
    
		// verifying existence of last name
    if(!values.lastname){
        errors.lastname="Last Name is required";
    }
    else if(!(values.lastname.length>3 && values.lastname.length<15)){
        errors.lastname="Last Name must between 3 to 15 characters";
    }

    	// verifying existence of birthdate
    if(!values.birthdate){
        errors.birthdate="Your birthdate is invalid";
    }
    else if(values.birthdate.length>3 && values.birthdate.length<15){
        errors.birthdate="your birthdate possible region";
    }

		// verifying existence of email
    if(!values.email){
        errors.email="Email is required";
    }
    else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(values.email)){
        errors.email="Email is invalid"; 
    }

    return errors;
}
export default ValidationSignup;
