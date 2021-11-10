import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "../other_components/signup/Signup";
import SignupPersonal from "../other_components/signup/SignupPersonal";
// import SignupFormSuccess from "../other_components/signup/SignupFormSuccess";

function App() {
  return (
    <>

      <Router>
        <Switch>
          
            {/* <Route path='*' component={Signup} />
            <Route path='*' component={SignupPersonal} /> */}

            <Route exact path="/" render={() => <Signup />} />
            <Route exact path="/signup" render={() => <SignupPersonal />} />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
