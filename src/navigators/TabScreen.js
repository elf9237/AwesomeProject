import React from 'react';
import PropTypes from 'prop-types';
import { TabNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import MyHomeScreen from '../components/navigator/tabNavigator/MyHomeScreen';
import MyNotificationsScreen from '../components/navigator/tabNavigator/MyNotificationsScreen';
import MyEditInfoScreen from '../components/navigator/tabNavigator/MyEditInfoScreen';


export const TabScreen = createBottomTabNavigator({
  MyHome: {
    screen: MyHomeScreen,
  },
  MyNotifications: {
    screen: MyNotificationsScreen,
  },
  MyEditInfo: {
    screen: MyEditInfoScreen,
  },
}, {
  initialRouteName: 'MyHome',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


