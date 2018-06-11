import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

export default class MyEditInfoScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: '我的',
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
          onPress={() => this.props.navigation.navigate('Main')}
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