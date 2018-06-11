import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'EditInfo', params: { token: '123456' } })],
  });

export default class StackNavigatorExampleScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Chat with Lucy',
    // };
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state, setParams } = navigation;
        const isInfo = state.params.mode === 'info';
        const { user } = state.params;
        console.log('---screenProps---');
        console.log(screenProps);
        console.log(navigation);
        return {
            title: isInfo ? `${user}'navigation主页` : `navigation主页 ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
                />
            ),
            headerStyle:{backgroundColor:screenProps?
                screenProps.themeColor:
                '#4ECBFC'},
        };
    };
    render() {
        const { navigate } = this.props.navigation;   //第一步传入navigate对象
        const { params } = this.props.navigation.state; //接收跟随路由 从父页面传递过来的参数
        return (
            <View style={styles.contain}>
                <Text>{params.user}</Text>
                <View style={styles.viewPage}>
                    <Button
                        onPress={() => navigate('EditInfo')}   //导航跳转与App.js中AppNavigator中自定义命名的Screen对象
                        title="EditInfo"
                        style={styles.button}
                    />
                    <Button
                        onPress={() => navigate('Second')}   //导航跳转与App.js中AppNavigator中自定义命名的Screen对象
                        title="Second"
                        style={styles.button}
                    />
                </View>
                <View style={styles.viewPage}>
                    <Button
                        onPress={() => this._getParam()}   //导航跳转与App.js中AppNavigator中自定义命名的Screen对象
                        title="getParam"
                        style={styles.button}
                    />
                    <Button
                        onPress={() => this._reset()}   //导航跳转与App.js中AppNavigator中自定义命名的Screen对象
                        title="reset"
                        style={styles.button}
                    />
                </View>
            </View>
        );
    }
    _getParam = () => {
        const name = this.props.navigation.getParam('user', 'Peter');
        console.log('param');
        console.log(name);
    }
     getParam = (paramName, defaultValue) =>{
        var params = route.params;
        if (params && paramName in params) {
          return params[paramName];
        }
        return defaultValue;
      }
      _reset = () => {
        this.props.navigation.dispatch(resetAction);
      }
      
}

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'column',
    },
    viewPage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,

    },
    button: {
      marginTop: 10
    }
  });