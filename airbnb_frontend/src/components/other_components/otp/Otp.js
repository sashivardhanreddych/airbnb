/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 12/11/2021
 * ...
 */


import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";


/**
* Function that creates useStates and handlechange of the events for the Otp Component
* @author   Sashi Vardhan Reddy
* @param    {Number} Otp    Value of an Otp
* @return   {String}         Event success or failure message
*/

const Otp = () => {
  
    // digits  of otp and syncing with the url
  const [values, setValues] = useState({
    otp: "",    // Initializing the otp value is empty
  });

  // const handleChange = (otp) => this.setState({ otp });

  // Updating the value of fields
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
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
        <p></p>
        <div className ="form_container">
        <div className="otp_box">
            <OtpInput
                name="otp"
                value={values.otp}
                onChange={(e) => handleChange(e)}
                numInputs={6}
                separator={<span>-</span>}
            />
        </div>
        <p className="otp_text">Haven't received a code?<a href=".">More Options</a></p>
        </div>
    </div>
  );
};

export default Otp;
