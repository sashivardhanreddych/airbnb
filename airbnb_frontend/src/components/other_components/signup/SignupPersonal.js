import React, { useState } from "react";
import Validation from "./Validation";

const SignupPersonal = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = () => {
    setValues({
      ...values,
      [Event.target.name]: Event.target.value,
    });
  };
  const handleFormSubmit = (Event) => {
    Event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="container">
      <div className="header_form">
        <div className="header_back">
          <span>
            <i className="fas fa-chevron-left"></i>{" "}
          </span>
        </div>
        <h4>Finish signing up</h4>
      </div>
      <p className="line">
        <span> </span>{" "}
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
              onChange={handleChange}
            />
            {errors.firstname && <p classNmae="error">{errors.firstname}</p>}
          </div>

          <div className="form_input">
            {/* <label className="label">First Name</label> */}
            <input
              className="input"
              type="text"
              name="lastname"
              value={values.lastname}
              placeholder="Last Name"
              onChange={handleChange}
            />
            {errors.lastname && <p classNmae="error">{errors.lastname}</p>}
          </div>
          <p className="input_info">Make sure it matches the name as per the government ID.</p>
          {errors.Lastname && <p classNmae="error">{errors.Lastname}</p>}
          <div className="form_input">
            {/* <label htmlFor="start">
              <strong>DateofBirth:</strong>
            </label> */}
            <input type="date" id="date" name="date"
              placeholder="Date of Birth" value={values.date} onChange={handleChange}
            ></input>
          </div>
          <p>
            To signup you need to be atleast 18.your birthday won't share with
            other people who use Airbnb.{" "}
          </p>

          <div className="form_input">
            <input
              className="input"
              type="Email"
              name="email"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
            />
            <p>We'll email you trip confirmations and receipts</p>
            {errors.email && <p classNmae="error">{errors.email}</p>}
          </div>

          <button type="submit" className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
          <div className="tacbox">
            <input id="checkbox" type="checkbox" />
            <span>
              By selecting<strong>Agree and continue</strong>,I agree to
              Airbnb's
              <a href=".">
                Terms of services,payment terms of services
              </a>,and <a href="."> Nondiscrimination policy</a> and acknowledge
              the
              <a href="."> privacy policy</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupPersonal;
