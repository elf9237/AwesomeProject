import { AppNavigator02 } from '../navigators/AppNavigator02';
import { NavigationActions } from 'react-navigation';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator02.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator02.router.getStateForAction(firstAction);
const secondAction = AppNavigator02.router.getActionForPathAndParams('Login');
const thirdAction = AppNavigator02.router.getActionForPathAndParams('MyEditInfo');

const initialNavState = AppNavigator02.router.getStateForAction(
  secondAction,
  tempNavState,
  thirdAction
);
// const navInitialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'))

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

export default function navReducer(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
      // case 'Login':
      //   nextState = AppNavigator02.router.getStateForAction(
      //     NavigationActions.back(),
      //     state
      //   );
      //   break;
      // case 'Logout':
      //   nextState = AppNavigator02.router.getStateForAction(
      //     NavigationActions.navigate({ routeName: 'Login' }),
      //     state
      //   );
      //   break;
      
      
      case 'Main':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Main' }),
          state
        );
        break;
      case 'Login':
        setate.index= 1 
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      case 'MyEditInfo':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'MyEditInfo' }),
          state
        );
        break;
      default:
        nextState = AppNavigator02.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }