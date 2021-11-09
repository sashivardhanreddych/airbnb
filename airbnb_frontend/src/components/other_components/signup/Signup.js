import React from "react";

export default function Signup() {
  return (
    <div className="container">
      <div className="header_form">
        <h4>Log in or sign up</h4>
      </div>
      <hr />
      <div className="form_container">
        <div className="header_title">
          <h3>Welcome to Airbnb</h3>
        </div>
        <div className="form_input">
          <label>Country/Region</label>
          <select id="countries_select" name="countries">
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
        <div className="form_input" id="form_input_number">
          {/* <label>Phone Number</label> */}
          {/* <div id="tel_code"></div> */}
          <div className="form_input_con">
            <input
              type="phone"
              name="phone"
              id="form_input_phone"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form_text">
          <p>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.
            <a href=".">Privacy Policy</a>
          </p>
        </div>
        <div className="form_btn">
          <input type="submit" value="Continue" />
        </div>
      <div class="hr_line">
      <hr className="line" />
      {/* <span className="line"> or  </span> */}
      <hr width="50%" className="line_right" />
      </div>
      <div className="form_social_media">
        <div className="form_social_btn">
          <span><i className="fab fa-facebook"></i></span>
          <input type="button" value="Continue With Facebook" />
        </div>
        <div className="form_social_btn">
          <span><i className="fab fa-facebook"></i></span>
          <input type="button" value="Continue With Google" />
        </div>
        <div className="form_social_btn">
          <span><i className="fab fa-facebook"></i></span>
          <input type="button" value="Continue With Apple" />
        </div>
        <div className="form_social_btn">
          <span><i className="fab fa-facebook"></i></span>
          <input type="button" value="Continue With email" />
        </div>
      </div>
      </div>
    </div>
  );
}
