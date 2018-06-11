import nav from './navReducer';  //navigation
//import nav from './navTabReducer';  //tabNavigation
import auth from './authReducer';

import { combineReducers } from 'redux';


const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
