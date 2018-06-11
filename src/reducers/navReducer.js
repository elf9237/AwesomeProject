import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
import { MENU } from '../common/Menu';
import * as types from '../actions/ActionTypes';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams(MENU.MAIN);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams(MENU.LOGIN);
// const thirdAction = AppNavigator.router.getActionForPathAndParams('MyEditInfo');

const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState,
);


export default function navReducer(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
      case 'Login':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case 'Logout':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: MENU.LOGIN }),
          state
        );
        break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }