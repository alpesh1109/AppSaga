import { LOGIN_USER, USER_LOGOUT } from './types';

export const loginAction = (email, password, callback) => {
  // if (!!callback) {
  //   callback();
  // }
  return ({
    type: LOGIN_USER,
    email,
    password,
    callback
  })

};
export const logoutAction = () => ({
  type: USER_LOGOUT
});