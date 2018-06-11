import { AppNavigatorDrawer } from '../navigators/AppNavigatorDrawer';
import { NavigationActions } from 'react-navigation';
import { MENU } from '../common/Menu';
import * as types from '../actions/ActionTypes';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigatorDrawer.router.getActionForPathAndParams(MENU.MAIN);
const tempNavState = AppNavigatorDrawer.router.getStateForAction(firstAction);
const secondAction = AppNavigatorDrawer.router.getActionForPathAndParams(MENU.LOGIN);
// const thirdAction = AppNavigatorDrawer.router.getActionForPathAndParams(MENU.MYEDITINFO);

const initialNavState = AppNavigatorDrawer.router.getStateForAction(
  secondAction,
  tempNavState,
  // thirdAction
);


export default function navReducer(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
      case 'Login':
        nextState = AppNavigatorDrawer.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case 'Logout':
        nextState = AppNavigatorDrawer.router.getStateForAction(
          NavigationActions.navigate({ routeName: MENU.LOGIN }),
          state
        );
        break;
      default:
        nextState = AppNavigatorDrawer.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }