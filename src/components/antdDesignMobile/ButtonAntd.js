import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from 'antd-mobile';

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

const ButtonAntd = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Profile Screen
    </Text>
    {/* <Button type="primary">Button</Button> */}
  </View>
);

ButtonAntd.navigationOptions = {
  title: 'AntdMobileDesign',
};

export default ButtonAntd;
