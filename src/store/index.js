import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// reducers 
import { LoginReducer } from './reducer/logIn';
import { SignUpReducer } from './reducer/signUp'
import { LogOutReducer } from './reducer/logOut'

const rootReducer = combineReducers({ LoginReducer, SignUpReducer, LogOutReducer })
const middle = applyMiddleware(thunk);

export const store = createStore(rootReducer, middle);