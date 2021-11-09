import '../../app/App.css';

const Validation = (values) => {
    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required";
    }
    else if(!/^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$/.test(values.fullname)){
        errors.fullname="Each word of name capatilized";
    }
    // pattern="[A-zA-Z]{1,13}" 
    else if(values.fullname.length>5 && values.fullname.length<25){
        errors.fullname="Full Name must between 5 to 25 characters";
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
