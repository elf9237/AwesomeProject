import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { YellowBox } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// const LoginScreen = ({ navigation }) => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       登入页面
//     </Text>
//     <Text style={styles.instructions}>
//       This is great
//     </Text>
//     <Button
//       onPress={() => navigation.dispatch({ type: 'Login' })}
//       title="登录"
//     />
    
//   </View>
// );

//ES6
class LoginScreen extends React.Component {
  componentDidMount(){
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            登入页面
          </Text>
          <Text style={styles.instructions}>
            This is great
          </Text>
          <Button
            onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
            title="登录"
          />
          
        </View>
      );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;
