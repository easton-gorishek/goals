import { USER_AUTH, LOGOUT } from './reducers';
// import { verifyUser } from '../../services/api';
// import { getStoredUser, clearStoredUser } from '../../services/request';

import {
  signup as signupApi,
  signin as signinApi
} from '../../services/api';

export const singup = credentials => ({
  type: USER_AUTH,
  payload: signupApi(credentials)
});

export const signin = credentials => ({
  type: USER_AUTH,
  payload: signinApi(credentials)
});

export const logout = () => ({ type: LOGOUT });

