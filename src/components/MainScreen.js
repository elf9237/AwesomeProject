import React from 'react';
import { StyleSheet, View } from 'react-native';

import { YellowBox } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// const MainScreen = () => (
//   <View style={styles.container}>
//     <LoginStatusMessage />
//     <AuthButton />
//   </View>
// );

//ES6
class MainScreen extends React.Component {
  componentDidMount(){
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
      return (
        <View style={styles.container}>
          <LoginStatusMessage />
          <AuthButton />
        </View>
      );
  }
}

MainScreen.navigationOptions = {
  title: '首页',
};

export default MainScreen;
