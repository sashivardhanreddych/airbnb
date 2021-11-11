import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ValidationSignup from "./Validation";

const SignupPersonal = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidationSignup(values));
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

          <div className="tacbox">
            <input id="checkbox" type="checkbox" />
            <span>
              <p className="input_info">By selecting<strong>Agree and continue</strong>,I agree to
              Airbnb's </p>
              <a href=".">
                Terms of services,payment terms of services
              </a>,and <a href="."> Nondiscrimination policy</a> and acknowledge
              the
              <a href="."> privacy policy</a>
            </span>
          </div>

          <div className="form_btn">
            <input type="submit" value="Agree and Continue" onClick={(e)=>handleFormSubmit(e)}/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupPersonal;
