import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from './reducers';
import { connect } from 'react-redux';
import { loadUsers } from './actions';
import User from './User';

class Users extends Component {

  static propTypes = {
    users: PropTypes.array,
    loadUsers: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    this.props.loadUsers();
  }

  render() { 
    const { users } = this.props;
    console.log(this.props.users);

    return ( 
      <ul>
        {users.map(user => (
          <User
            key={user._id} 
            user={user}
          />
        ))}
      </ul>
    );
  }
}
 
export default connect(
  state => ({
    users: getUsers(state),
  }),
  { loadUsers }
)(Users);