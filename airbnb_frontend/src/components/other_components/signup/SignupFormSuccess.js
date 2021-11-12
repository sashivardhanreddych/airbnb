/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 11/11/2021
 * ...
 */

import React from 'react'
import "../../app/App.css";

/**
* Function that creates successful message to render when user account created
* @author   Sashi Vardhan Reddy
* @param    {String}         call from the Form.js
* @return   {String}         Event success or failure message
*/

const SignupFormSuccess=() => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <h1 className="form-success">User Account is Created</h1>
      </div>    
    </div>
  )
}
export default SignupFormSuccess;
