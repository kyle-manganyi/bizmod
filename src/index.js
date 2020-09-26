import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './auth/signIn'
import SignUp from './auth/signUp'
import RecruiterSignUp from './auth/recruiterReg'
import Resetpassword from './auth/resetpassword'

import Dashboard from './components/Dashboard/Dashboard'
import Nav from './navbar/navbar'
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const routing = (
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/recsignup" component={RecruiterSignUp}/>
      <Route path="/reset" component={Resetpassword}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/Nav" component={Nav}/>
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
