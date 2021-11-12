/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 11/11/2021
 * ...
 */

import React,{useState} from 'react';
import SignupPersonal from './SignupPersonal';
import SignupFormSuccess from './SignupFormSuccess'; 

/**
 * if Form is successfully sent the data then shows successful message component
 * if not error, then message will be rendered
 **/

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return  <div> {!formIsSubmitted ? <SignupPersonal submitForm={submitForm}/> : <SignupFormSuccess/>} </div> 
}
export default Form;
