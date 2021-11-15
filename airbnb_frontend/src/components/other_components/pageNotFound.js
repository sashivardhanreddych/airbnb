import React from 'react'


/**
* Function that used to render the error page handling
* @param    {String}        Response from the server
* @return   {String}        Event success or failure message
*/
const PageNotFound = ()=> {
    return (
        <div>
            <img src={"./../assets/404error.jpg"} alt={"Page Not Found Image"}></img>
        </div>
    )
}
export default PageNotFound;
