/**
 * Summary. Contains of functions used as a http methods
 *
 * Description. This is the set of methods for usage of HTTP
 *  operations.
 *
 * @author Sashi
 * @since  10/11/2021
 **/

// npm dependencies
const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());

const cors = require("cors")
app.use(cors());
const bodyParser = require("body-parser");

// internal dependencies
const index_main = require("../index.js");
const User_login = require("../models/loginModel");
const User_info = require("../models/signupModel");

const PORT = 1111;



/*
* Post Schema on Login Page
*/

router.post("/login", async (req, res) => {
 console.log(req.body);
 const users = new User_login({
   //client side data
   countryCode: req.body.countryCode,
   phone: req.body.phone
 });
 try {
   const a = await users.save();
   res.json(a);
 } catch (err) {
   res.send(err);
 }
});




/**
 * Post Schema on Signup 
 */

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const users = new User_info({
    //client side data
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    email: req.body.email
  });
  try {
    const a = await users.save();
    res.json(a);
  } catch (err) {
    res.send(err);
  }
});

app.use("/", router);

/**
 * Getting All the Schema
 */

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data); 
  } catch (err) {
    // res.send('Error', err);
    res.status(err.status || 500).send('error');
    // res.locals.error = err;
    // if (err.status >= 100 && err.status < 600) res.status(err.status);
    // else res.status(500);
    // res.render("error");
  }
});

/**
 * For Getting Paticular Schema
 */

router.get("/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.send("invalid id"); // if invalid id is given
  }
});

/**
 * Patch Update
 */
router.patch("/:id", async (req, res) => {
  try {
    const getDataById = await User.findById(req.params.id); //Grabs schema by paticular id   // User contain schema
    getDataById.name = req.body.name;
    const data = await getDataById.save();
    res.json(data);
  } catch (err) {
    res.sendStatus(404);
  }
});

// /**
//  * Delet Whole Schema
//  */
router.delete("/", async (req, res) => {
  try {
    const data = await User.deleteMany();
    res.json("successfully deleted"); //
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
});

// /**
//  * Delete by Paticular id
//  */
router.delete("/:id", async (req, res) => {
  try {
    const a = await User.findByIdAndDelete(req.params.id);
    res.send("sucessfully deleted");
    res.sendStatus(200);
  } catch (err) {
    res.send();
  }
});





// page not found error handling  middleware

app.use("*", (req, res, next) => {
  const error = {
    status: 404,
    message: API_ENDPOINT_NOT_FOUND_ERR,
  };
  next(error);
});


app.listen(PORT, () => {
  console.log(`successfully listening at port ${PORT}`);
});

module.exports = router;
