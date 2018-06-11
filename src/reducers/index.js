import nav from './navReducer';
import auth from './authReducer';

import { combineReducers } from 'redux';


const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
