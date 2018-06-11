import { AppNavigatorTab } from '../navigators/AppNavigatorTab';
import { NavigationActions } from 'react-navigation';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator02.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator02.router.getStateForAction(firstAction);
// const secondAction = AppNavigator02.router.getActionForPathAndParams('Login');
// const thirdAction = AppNavigator02.router.getActionForPathAndParams('MyEditInfo');

const firstAction = AppNavigatorTab.router.getActionForPathAndParams('Tab');

const initialNavState = AppNavigatorTab.router.getStateForAction(
  // secondAction,
  // tempNavState,
  // thirdAction
  firstAction
);


// const navInitialState = { 
//   index: 0,  
//   routes: [  
//     {  
//       key: 'Main',  
//       routeName:'Main',  
//     },  
//     {  
//       key: 'Login',  
//       routeName:'Login',  
//     },  
//     {  
//       key: 'MyEditInfo',  
//       routeName:'MyEditInfo',  
//     },  
//   ],  
// };
/**
 *
 *
 * @export
 * @param {*} [state=initialNavState] or [state=navInitialState]
 * @param {*} action
 * @returns
 */
export default function navReducer(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
      case 'Main':
        nextState = AppNavigatorTab.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Main' }),
          state
        );
        break;
      case 'Login':
        setate.index= 1 
        nextState = AppNavigatorTab.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      case 'MyEditInfo':
        nextState = AppNavigatorTab.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'MyEditInfo' }),
          state
        );
        break;
      default:
        nextState = AppNavigatorTab.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }