/**
 * Summary. Contains of root file
 *
 * Description. This is the set of methods for usage to start run on application.
 *  operations.  
 *
 * @author Sashi
 * @since  10/11/2021
 */


// npm dependencies
const express = require("express");

// initializing an express application
const APP = express();

//internal dependencies
const dbconfig = require('./backend/dbconfig');
const app_file = require('./backend/app');

