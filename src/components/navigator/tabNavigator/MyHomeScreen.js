import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: '首页',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../../sources/images/index-selected.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Go to 热点"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });