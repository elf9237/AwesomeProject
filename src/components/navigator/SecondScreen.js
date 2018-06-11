import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'SecondScreen with Lucy',
    };
    _replace = () => {
        this.props.navigation.goBack();
      }
    componentDidMount () {
    const didBlurSubscription = this.props.navigation.addListener(  //监听导航行为
        'didFocus',
            (obj)=>{
                console.log(obj)
            }
        );
    }
    render() {
        return (
            <View>
                <Button
                    onPress={() => this._replace()}   //导航跳转与App.js中AppNavigator中自定义命名的Screen对象
                    title="reset"
                    style={styles.button}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
      marginTop: 10
    }
  });