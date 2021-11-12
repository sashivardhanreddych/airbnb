/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 10/11/2021
 * ...
 */

import React, { useState } from "react";
import ValidationSignup from "./Validation";
import { Link } from "react-router-dom";
import Control from "../../controllers/Control";


/**
* Function that uses to update the form elements and continue to next page of registration
* @author   Sashi Vardhan Reddy
* @param    {String}         input values from the UI
* @return   {String}         Event success or failure message
*/
const Signup = () => {
    // Initializing and updating the values of fields
  const [values, setValues] = useState({
		countryCode: "",
    phone: ""
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

		// const body = { values };
    // alert(values);
		// console.log(values);
    let body = values;
    console.log(body);
		let url = "http://localhost:1111/login";

		const success = (res) => {
			console.log("Success", res);
			alert("User created successfully")
		};

		const failure = (err) => {
			console.log("Error", err);
		};

		Control.sendRequest(
			url,
			"post",
			values,
			false,
			null,
			success,
			failure
		);
  };

  return (
    <div className="container">
      <div className="header_form">
        <h4>Log in or sign up</h4>
      </div>
      <p className="line">
        <span> </span>{" "}
      </p>
      {/* <hr /> */}
      <div className="form_container">
        <div className="header_title">
          <h3>Welcome to Airbnb</h3>
        </div>
        <form>
          <div className="form_input">
            <label>Country/Region</label>
            <select id="countries_select" name="countryCode" value={values.countryCode}
            onChange={(e) => handleChange(e)}>
              <option value=" ">Select Your Country Code</option>
              <option value="91IN">India (+91)</option>
              <option value="93AF">Afghanistan (+93)</option>
              <option value="213DZ">Algeria (+213)</option>
              <option value="61AU">Australia (+61)</option>
              <option value="43AT">Austria (+43)</option>
              <option value="880BD">Bangladesh (+880)</option>
              <option value="1CA">Canada (+1)</option>
              <option value="1US">United Status (+1)</option>

              <option value="91IN">India (+91)</option>
              <option value="93AF">Afghanistan (+93)</option>
              <option value="213DZ">Algeria (+213)</option>
              <option value="61AU">Australia (+61)</option>
              <option value="43AT">Austria (+43)</option>
              <option value="880BD">Bangladesh (+880)</option>
              <option value="1CA">Canada (+1)</option>
              <option value="1US">United Status (+1)</option>

              <option value="91IN">India (+91)</option>
              <option value="93AF">Afghanistan (+93)</option>
              <option value="213DZ">Algeria (+213)</option>
              <option value="61AU">Australia (+61)</option>
              <option value="43AT">Austria (+43)</option>
              <option value="880BD">Bangladesh (+880)</option>
              <option value="1CA">Canada (+1)</option>
              <option value="1US">United Status (+1)</option>
            </select>
          </div>
          {errors.countryCode && <p className="error">{errors.countryCode}</p>}
          <div className="form_input" id="form_input_number">
            {/* <label>Phone Number</label> */}
            {/* <div id="tel_code"></div> */}
            <div className="form_input_con">
              <input type="number"
                name="phone"
                id="form_input_phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}
          <div className="form_text">
            <p>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <a href=".">Privacy Policy</a>
            </p>
          </div>
          <div className="form_btn">
            <Link to="/signup">
              <input
                type="button"
                value="Continue"
                onClick={(e) => handleFormSubmit(e)}
              />
            </Link>
          </div>

          <div className="hr_line">
            <p className="line">
              <span> or </span>
            </p>
          </div>
          <div className="form_social_media">
            <div className="form_social_btn">
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <input type="button" value="Continue With Facebook" />
            </div>
            <div className="form_social_btn">
              <span>
                <i className="fab fa-google"></i>
              </span>
              <input type="button" value="Continue With Google" />
            </div>
            <div className="form_social_btn">
              <span>
                <i className="fab fa-apple"></i>
              </span>
              <input type="button" value="Continue With Apple" />
            </div>
            <div className="form_social_btn">
              <span>
                <i className="far fa-envelope"></i>
              </span>
              <input type="button" value="Continue With email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
