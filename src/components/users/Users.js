import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from './reducers';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

class Users extends Component {

  static propTypes = {
    users: PropTypes.array,
    loadUsers: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    this.props.loadUsers();
  }

  render() { 
    console.log(this.props.users[0]);

    return ( 
      <h2>I am Users</h2>
    );
  }
}
 
export default connect(
  state => ({
    users: getUsers(state),
  }),
  { loadUsers }
)(Users);