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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10
  },
  viewBtn: {
    margin: 10,
  }
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'您已经登录'}
      </Text>

      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
        title="Profile"
      />

      {/* 登陆后示例模块入口 */}

      <View style={styles.typeView}>
          {/* antMobile模块 */}
        <Button
          onPress={() =>
            dispatch(NavigationActions.navigate({ routeName: 'AntdMobileDesign' }))}
          title="AntdMobile"
          style={styles.viewBtn}
        />
          {/* StackNavigator模块 */}
        <Button
          onPress={() =>
            dispatch(NavigationActions.navigate({ routeName: 'StackNavigatorScreen', params: {
              user: 'Lucy',
              mode: 'info',
            } }))}
          title="StackNavigator"
          style={styles.viewBtn}
        />
      </View>

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
