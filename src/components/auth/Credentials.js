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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { name, email, password } = this.state;
    const { action } = this.props;

    return (
      <form>
        <FormControl label="name">
          <input name="name" value={name} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="password">
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={this.handleChange}
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