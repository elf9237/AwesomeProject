import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  typeView: {
    flexDirection: 'column',
  }
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
      <View style={styles.typeView}>

      </View>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
        title="Profile"
      />

      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'AntdMobileDesign' }))}
        title="AntdMobileDesign"
      />

      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'StackNavigatorScreen', params: {
            user: 'Lucy',
            mode: 'info',
          } }))}
        title="StackNavigatorScreen"
      />

    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);
