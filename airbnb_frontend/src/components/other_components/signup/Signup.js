/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 10/11/2021
 * ...
 */

import React, { useState } from "react";
import ValidationSignup from "./Validation";
// import { Link } from "react-router-dom";
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
    phone: "",
    firstname: "",
    lastname: "",
    birthdate: "",
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

  /**
   * Handler for managing registrationPageNumber or
   * multipage registration to hide components or pages
   */
  const [visible, setVisible] = useState(true);

  // Submit the all values of fields and errors to render the browser
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidationSignup(values));
    let body = values;
    console.log(body);
    let url = "http://localhost:1111/signup";

    const success = (res) => {
      console.log("Success", res);
      alert("User created successfully");
    };

    const failure = (err) => {
      console.log("Error", err);
      alert("Please Enter all Required Fields User not registered");
    };

    Control.sendRequest(url, "post", values, false, null, success, failure);
  };

  return (
    <>
      {visible ? (
        <>
          <div className="container">
            <div className="header_form">
              <h4>Log in or sign up</h4>
            </div>
            <p className="line">
              <span> </span>{" "}
            </p>
            <div className="form_container">
              <div className="header_title">
                <h3>Welcome to Airbnb</h3>
              </div>
              <form>
                <div className="form_input">
                  <label>Country/Region</label>
                  <select
                    id="countries_select"
                    name="countryCode"
                    value={values.countryCode}
                    onChange={(e) => handleChange(e)}
                  >
                    {console.log(values.countryCode)}
                    {console.log(values.phone)}
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
                {errors.countryCode && (
                  <p className="error">{errors.countryCode}</p>
                )}

                <div className="form_input" id="form_input_number">
                  <div className="form_input_con">
                    <input
                      type="number"
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
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply.
                    <a href=".">Privacy Policy</a>
                  </p>
                </div>

                <div className="form_btn">
                  <input
                    type="button"
                    value="Continue"
                    onClick={(() => setVisible(false)) }
                  />
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
        </>
      ) : (
        <>
          <div className="container">
            <div className="header_form">
              <div className="header_back">
                <span>
                  <i
                    className="fas fa-chevron-left"
                    onClick={() => setVisible(true)}
                  ></i>
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
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.firstname && (
                  <p className="error">{errors.firstname}</p>
                )}

                <div className="form_input">
                  {/* <label className="label">First Name</label> */}
                  <input
                    className="input"
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    placeholder="Last Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.lastname && <p className="error">{errors.lastname}</p>}
                <p className="input_info">
                  Make sure it matches the name as per the government ID.
                </p>
                {errors.Lastname && <p classNmae="error">{errors.Lastname}</p>}
                <div className="form_input">
                  <input
                    type="Date"
                    id="date"
                    name="birthdate"
                    placeholder="Date of Birth"
                    value={values.birthdate}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
                <p className="input_info">
                  To signup you need to be atleast 18.your birthday won't share
                  with other people who use Airbnb.
                </p>

                <div className="form_input">
                  <input
                    className="input"
                    type="Email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
                <p className="input_info">
                  We'll email you trip confirmations and receipts
                </p>

                <div className="ticbox">
                  {/* <input id="checkbox" type="checkbox" /> */}
                  <span>
                    <p className="input_info">
                      By selecting<strong>Agree and continue</strong>,I agree to
                      Airbnb's.
                    </p>
                    <a href="." className="input_info">
                      Terms of services,payment terms of services
                    </a>
                    ,and{" "}
                    <a href="." className="input_info">
                      {" "}
                      Nondiscrimination policy
                    </a>{" "}
                    and acknowledge the
                    <a href="." className="input_info">
                      {" "}
                      privacy policy
                    </a>
                  </span>
                </div>

                <div className="form_btn">
                  <input
                    type="submit"
                    value="Agree and Continue"
                    onClick={(e) => handleFormSubmit(e)}
                  />
                </div>
                <div className="text">
                  <p>
                    Airbnb will send you members-only deals, inspiration,
                    marketing emails, and push notifications. You can opt out of
                    receiving these at any time in your account settings or
                    directly from the marketing notification. I don’t want to
                    receive marketing messages from Airbnb
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
