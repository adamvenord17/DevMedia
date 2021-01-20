//this is root reducer
import { combineReducers } from 'redux';
import authReducer from './authReducer'; //for authentication purposes
import errorReducer from './errorReducer';
import profileReducer from './profileReducer'; //fetch user's info



export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
});