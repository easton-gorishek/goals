import { USERS_LOAD } from './reducers';
import { getAllGoals } from '../../services/api';

export const loadUsers = () => ({
  type: USERS_LOAD,
  payload: getAllGoals()
});
