/**
 * @author Sashi Vardhan Reddy
 * @version 0.0.1
 * @date 10/11/2021
 * ...
 */

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "../other_components/signup/Signup";
import SignupPersonal from "../other_components/signup/SignupPersonal";
import Form from "../other_components/signup/Form";
import Otp from "../other_components/otp/Otp";
import PageNotFound from "../other_components/PageNotFound";
// import SignupFormSuccess from "../other_components/signup/SignupFormSuccess";

function App() {
  return (
    <>

      <Router>
        <Switch>
          
            {/* <Route path='*' component={Signup} />
            <Route path='*' component={SignupPersonal} /> */}
            {/* <redirect to='/login' component={Signup} /> */}
        
            <Route exact path="/" render={() => <Signup />} />
            <Route exact path="/otp" render={()=><Otp/>} />
            <Route exact path="/signup" render={() => <SignupPersonal />} />
            <Route path="/form" render={() => <Form />} />
            <Route render={() =><PageNotFound /> } />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;

