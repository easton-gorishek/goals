import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class Credentials extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  static propTypes = {
    action: PropTypes.string.isRequired
  }

  render() { 
    const { name, email, password } = this.state;
    const { action } = this.props;
    
    return (
      <form>
        <FormControl label="name">
          <input name="name" value={name}/>
        </FormControl>

        <FormControl label="email">
          <input name="email" value={email}/>
        </FormControl>

        <FormControl label="password">
          <input 
            type="password" 
            name="password" 
            value={password}
          />
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
 
export default Credentials;