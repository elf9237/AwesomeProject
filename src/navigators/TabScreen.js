import React from "react";
import PropTypes from "prop-types";
import {
  TabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import MyHomeScreen from "../components/navigator/tabNavigator/MyHomeScreen";
import MyNotificationsScreen from "../components/navigator/tabNavigator/MyNotificationsScreen";
import MyEditInfoScreen from "../components/navigator/tabNavigator/MyEditInfoScreen";

export const TabScreen = createBottomTabNavigator(
  {
    MyHome: {
      screen: MyHomeScreen
    },
    MyNotifications: {
      screen: MyNotificationsScreen
    },
    MyEditInfo: {
      screen: MyEditInfoScreen
    }
  },
  {
    initialRouteName: "MyHome",
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

// {
//   tabBarPosition: 'bottom',
//   swipeEnabled: false,
//   animationEnabled: true,
//   lazy: true,
//   backBehavior: 'none',
//   tabBarOptions: {
//       activeTintColor: 'rgb(22,131,251)',
//       inactiveTintColor: '#959595',
//       pressColor: 'rgb(22,131,251)',
//       style: { backgroundColor: '#ffffff', height: px2dp(98),borderTopColor:'#e6e6e6',borderTopWidth:1},
//       indicatorStyle: { height: 1 },
//       showIcon: true,
//       labelStyle: {
//           fontSize: px2dp(20),
//           marginTop: px2dp(4)
//       },
//       iconStyle: {
//           width: px2dp(48),
//           height: px2dp(42)
//       }
//   }
