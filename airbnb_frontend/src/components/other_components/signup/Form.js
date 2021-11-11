import React,{useState} from 'react';
import SignupPersonal from './SignupPersonal';
import SignupFormSuccess from './SignupFormSuccess'; 

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return  <div> {!formIsSubmitted ? <SignupPersonal submitForm={submitForm}/> : <SignupFormSuccess/>} </div> 
}
export default Form;
