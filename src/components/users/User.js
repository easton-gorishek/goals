import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

  static propTypes = {
    user: PropTypes.object
  }

  render() { 
    const { user } = this.props;

    return (
      <li>
        <p>{user.name}</p>
        {user.goals.map(goal => (
          <Goal
            key={goal._id}
            goal={goal}
          />
        ))}
      </li>
    );
  }
}

class Goal extends Component {

  static propTypes = {
    goal: PropTypes.object
  }
  
  render() {
    const { goal } = this.props;

    return (
      <Fragment>
        <p>{goal.goal}</p>
        <p>{goal.completed ? 'True' : 'False'}</p>
      </Fragment>
    );
  }
}
 
export default User;