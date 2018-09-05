import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Credentials from './Credentials';

class Auth extends Component {
 
  render() { 

    return ( 
      <section>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In"/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign up"/>
            </div>
          )}/>
          <Redirect to="/auth/signin"/>
        </Switch>
      </section>
    );
  }
}
 
export default Auth;