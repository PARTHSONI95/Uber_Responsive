import logo from './logo.svg';
import '@patternfly/react-core/dist/styles/base.css';
import SimpleLoginPage from './components/SimpleLoginPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import SignUp from './components/SignUp';


function App() {
  return (
  <Router>
      <React.Fragment>
       <Switch>
		      <Route exact path="/" component={SimpleLoginPage}/>
				<Route exact path="/signup" component={SignUp}/>
	    </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
