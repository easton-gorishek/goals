import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Goal extends Component {
  
  static propTypes = {
    goal: PropTypes.object
  }

  render() {  
    const { goal } = this.props;
    return (
      <li>
        <p>{goal.goal}</p>
        <p>{goal.completed}</p>
      </li>
    );
  }
}
 
export default Goal;