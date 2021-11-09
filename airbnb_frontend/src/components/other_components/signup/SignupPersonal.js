import React, { useState } from "react";
import Validation from "./Validation";

const SignupPersonal = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = () => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="container">
      <div className="app-wrapper">    
        <div className="header_form">
          <h4 className="title">Finish signing up</h4>
        </div>
        <hr />
        <form className="form-wrapper">
          <div className="form_input">
            {/* <label className="label">First Name</label> */}
            <input className="input" type="text" name="firstname" placeholder="First Name"
             value={values.firstname} onChange={handleChange} />
            {errors.firstname && <p classNmae="error">{errors.firstname}</p>}
          </div>

          <div className="form_input">
            {/* <label className="label">First Name</label> */}
            <input className="input" type="text" name="lastname" value={values.lastname}
             placeholder="First Name" onChange={handleChange} />
            {errors.lastname && <p classNmae="error">{errors.lastname}</p>}
          </div>
          <p>Make sure it matches the name as per the government ID</p>
          {errors.Lastname && <p classNmae="error">{errors.Lastname}</p>}
          <div className="dobname">
            <label for="start">
              <strong>DateofBirth:</strong>
            </label>

            <input type="date" id="start" name="trip-start" value="DOB"></input>
          </div>
                <p>To signup you need to be atleast 18.your birthday won't share with
                    other people who use Airbnb.{" "}</p>

          <div className="email">
            <input className="input" type="Email" name="email" placeholder="Email address"
            value={values.email} onChange={handleChange}
            />
            <p>We'll email you trip confirmations and receipts</p>
            {errors.email && <p classNmae="error">{errors.email}</p>}
          </div>

          <button type="submit"className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
          <div class="tacbox">
            
            <input id="checkbox" type="checkbox" /><span>By selecting<strong>Agree and continue</strong>,I agree to Airbnb's <a href="#">Terms of services,payment terms of services</a>,and <a href="#"> Nondiscrimination policy</a> and acknowledge the<a href="#"> privacy policy</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupPersonal;