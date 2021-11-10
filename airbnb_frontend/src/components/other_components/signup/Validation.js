import '../../app/App.css';

const Validation = (values) => {
    let errors={};
    if(!values.phone){
        errors.phone = "Phone Number is required";
    }
    if(!values.fullname){
        errors.fullname="Full Name is required";
    }
    else if(values.fullname.length<3 && values.fullname.length<15){
        errors.fullname="Full Name must between 3 to 15 characters";
    }
    if(!values.lastname){
        errors.lastname="Last Name is required";
    }
    else if(values.lastname.length>3 && values.lastname.length<15){
        errors.lastname="Last Name must between 3 to 15 characters";
    }
    if(!values.email){
        errors.email="Email is required";
    }
    else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(values.email)){
        errors.email="Email is invalid"; ///\s+@\s+\.\s+/
    }
    if(!values.password){
        errors.password="Password is required";
    }else if(values.password.length<8){
        errors.password="Password atleast 8 characters";
    }
    if(values.password !== values.confirmpassword){
        errors.confirmpassword="Password Not Match";
    }
    return errors;
}
export default Validation;
