import { combineReducers } from 'redux';
import reducer from './newsReducer';
import UserReducer from './loginReducer';

export default combineReducers({
   
    newsread: reducer,
    user: UserReducer
})

