import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';//将要绑定的actions和dispatch绑定到一起
import { DrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator, StackNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';


import MyHomeScreen from '../components/navigator/drawerNavigator/MyHomeScreen';
import MyNotificationsScreen from '../components/navigator/drawerNavigator/MyNotificationsScreen';
import MyEditInfoScreen from '../components/navigator/drawerNavigator/MyEditInfoScreen';



/**
 * 将TabScreen作为一个界面设置到了StackNavigator,这样就可以实现Tab导航和界面间跳转的效果,
 * StackNavigator就是以栈的方式来存放整个界面的，而TabNavigator是作为一个界面内不同子界面之间切换
 */
export const AppNavigatorDrawer = DrawerNavigator({
  Main: {
    screen: MyHomeScreen,
  },
  Login: {
    screen: MyNotificationsScreen,
  },
  MyEditInfo: {
    screen: MyEditInfoScreen,
  },
},
{
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  // transitionConfig: () => ({
  //   transitionSpec: {
  //     duration: 300,
  //     easing: Easing.out(Easing.poly(4)),
  //     timing: Animated.timing,
  //   },
  //   screenInterpolator: sceneProps => {
  //     const { layout, position, scene } = sceneProps;
  //     const { index } = scene;

  //     const height = layout.initHeight;
  //     const translateY = position.interpolate({
  //       inputRange: [index - 1, index, index + 1],
  //       outputRange: [height, 0, 0],
  //     });

  //     const opacity = position.interpolate({
  //       inputRange: [index - 1, index - 0.99, index],
  //       outputRange: [0, 1, 1],
  //     });

  //     return { opacity, transform: [{ translateY }] };
  //   },
  // }),
}
);


/**不将TabScreen作为一个界面设置到了StackNavigator,直接TabNavigator写法 */

// export const AppNavigatorTab = createBottomTabNavigator({
//   Main: {
//     screen: MyHomeScreen,
//   },
//   Login: {
//     screen: MyNotificationsScreen,
//   },
// },
// {
//   headerMode: 'none',
//   mode: 'modal',
//   navigationOptions: {
//     gesturesEnabled: false,
//   },
// }
// );



class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigatorDrawer
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}


const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
