import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';//将要绑定的actions和dispatch绑定到一起
import { TabNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';


import MyHomeScreen from '../components/navigator/tabNavigator/MyHomeScreen';
import MyNotificationsScreen from '../components/navigator/tabNavigator/MyNotificationsScreen';
import MyEditInfoScreen from '../components/navigator/tabNavigator/MyEditInfoScreen';


export const AppNavigator02 = createBottomTabNavigator({
  Main: {
    screen: MyHomeScreen,
  },
  Login: {
    screen: MyNotificationsScreen,
  },
  MyEditInfo: {
    screen: MyEditInfoScreen,
  },
}, {
  initialRouteName: 'Main',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator02
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

// const macthDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {  
//       navigator: navigator,
//     }, 
//     dispatch
// );  
// } 
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
