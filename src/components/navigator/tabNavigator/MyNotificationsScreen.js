import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: '热点',
      tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../../../sources/images/me-selected.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="回到首页"
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