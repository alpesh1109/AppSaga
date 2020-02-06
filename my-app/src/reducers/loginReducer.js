import { LOGIN_SUCC } from '../actions/types';

const initialState = {
  logindata: [],
  auth: localStorage.getItem('auth')
}


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCC:
      return { ...state, logindata: action.json, auth: action.auth };
    default:
      return state;
  }
};

