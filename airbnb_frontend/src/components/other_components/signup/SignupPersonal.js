/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 11/11/2021
 * ...
 */

import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ValidationSignup from "./Validation";
import Control from "../../controllers/Control";


/**
* Function that uses to update the form elements and stored in the database
* when we enter agree and continue button
*
* @param    {String}         input values from the UI
* @return   {String}         Event success or failure message
*/
const SignupPersonal = () => {

  // Initializing and updating the values of fields
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date: "",
    email: "",
  });

  // Set the Errors of fields
  const [errors, setErrors] = useState({});

  // Updating the value of fields
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Submit the all values of fields and errors to render the browser
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidationSignup(values));

    const body =  values ;
		console.log(body);
		let url = "http://localhost:1111/signup";

    // success alert to render the browser
		const success = (res) => {
			console.log("Success", res);
			alert("User created successfully")
		};

    // failure alert to render the browser
		const failure = (err) => {
			alert("Error", err);
		};

		Control.sendRequest(
			url,
			"post",
			body,
			false,
			null,
			success,
			failure
		);
  };

  return (
    <div className="container">
      <div className="header_form">
        <div className="header_back">
          <span>
            <Link to="/">
             <i className="fas fa-chevron-left"></i>
             </Link>
          </span>
        </div>
        <h4>Finish signing up</h4>
      </div>
      <p className="line">
        <span> </span>
      </p>
      <div className="form_container">
        <form className="form-wrapper">
          <div className="form_input">
            {/* <label className="label">First Name</label> */}
            <input
              className="input"
              type="text"
              name="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={(e)=>handleChange(e)}
            />    
          </div>
          {errors.firstname && <p className="error">{errors.firstname}</p>}

          <div className="form_input">
            {/* <label className="label">First Name</label> */}
            <input
              className="input"
              type="text"
              name="lastname"
              value={values.lastname}
              placeholder="Last Name"
              onChange={(e)=>handleChange(e)}
            />    
          </div>
          {errors.lastname && <p className="error">{errors.lastname}</p>}
          <p className="input_info">Make sure it matches the name as per the government ID.</p>
          {errors.Lastname && <p classNmae="error">{errors.Lastname}</p>}
          <div className="form_input">
            {/* <label htmlFor="start">
              <strong>DateofBirth:</strong>
            </label> */}
            <input type="Date" id="date" name="date"
              placeholder="Date of Birth" value={values.date} onChange={(e)=>handleChange(e)}
            ></input>
          </div>
          <p className="input_info">
            To signup you need to be atleast 18.your birthday won't share with
            other people who use Airbnb.{" "}
          </p>

          <div className="form_input">
            <input
              className="input"
              type="Email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <p className="input_info">We'll email you trip confirmations and receipts</p>

          <div className="ticbox">
            <input id="checkbox" type="checkbox" />
            <span>
              <p className="input_info">By selecting<strong>Agree and continue</strong>,I agree to
              Airbnb's </p>
              <a href="." className="input_info">
                Terms of services,payment terms of services
              </a>,and <a href="." className="input_info"> Nondiscrimination policy</a> and acknowledge
              the
              <a href="." className="input_info"> privacy policy</a>
            </span>
          </div>

          <div className="form_btn">
            <input type="submit" value="Agree and Continue" onClick={(e)=>handleFormSubmit(e)}/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignupPersonal;
