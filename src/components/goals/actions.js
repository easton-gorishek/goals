import { GOALS_LOAD, GOAL_ADD } from './reducers';
import { getGoals, postGoal } from '../../services/api';

export const loadGoals = () => ({
  type: GOALS_LOAD,
  payload: getGoals()
});

export const addGoal = goal => ({
  type: GOAL_ADD,
  payload: postGoal(goal)
});
