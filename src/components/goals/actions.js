import { GOALS_LOAD, GOAL_ADD, GOAL_UPDATE } from './reducers';
import { getGoalsById, postGoal, putGoal } from '../../services/api';

export const loadGoals = () => ({
  type: GOALS_LOAD,
  payload: getGoalsById()
});

export const addGoal = goal => ({
  type: GOAL_ADD,
  payload: postGoal(goal)
});

export const updateGoal = goal => ({
  type: GOAL_UPDATE,
  payload: putGoal(goal)
});