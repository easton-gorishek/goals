export const GOALS_LOAD = 'GOALS_LOAD';
export const GOAL_ADD = 'GOAL_ADD';

export const getGoals = state => state.goals;

export function goals(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload;
    case GOAL_ADD:
      return state;
    default:
      return state;
  }
}

