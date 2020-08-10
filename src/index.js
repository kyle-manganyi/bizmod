import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './auth/signIn'
import SignUp from './auth/signUp'
import Dashboard from './components/Dashboard/Dashboard'
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const routing = (
  <Router>
    <Switch>
      <Route path="/upload" component={Dashboard} exact/>
      <Route path="/signin" component={SignIn} exact/>
      <Route path="/signup" component={SignUp} exact/>
      <Route path="/Nav" component={Nav} exact/>
      <Route path='/' component={App} exact />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
