import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
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
// const AntdMobileDesign = (navigation) => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       Antd-Design-Mobile Screen
//     </Text>
//     <Button type="primary" onPress={this._ButtonPage(navigation)}>Button</Button>
//   </View>
// );
class AntdMobileDesign extends React.Component {

  // 构造
  constructor(props) {
    super(props);
    this.state = {
      
    };
}
  _ButtonPage = () => {
    // this.props.navigation.dispatch({ type: 'ButtonAntd' });
    this.props.navigation.navigate('ButtonAntd', { name: 'ButtonAntd' });
  }
  render() {
    return <View style={styles.container}>
    <Text style={styles.welcome}>
      Antd-Design-Mobile Screen
    </Text>
    <View style={{height: 40}}></View>
   <TouchableOpacity onPress={() => this._ButtonPage()} style={GlobalStyles.btn}><Text style={GlobalStyles.btnText}>按钮</Text></TouchableOpacity>
  </View>;
  }
}

AntdMobileDesign.navigationOptions = {
  title: 'AntdMobileDesign',
};

export default AntdMobileDesign;
