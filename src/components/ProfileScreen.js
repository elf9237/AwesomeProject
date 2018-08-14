import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
// import  speedTest  from 'speedtest-net';
// var test = speedTest({maxTime: 5000});

const {height, width} = Dimensions.get('window');
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
  webWrap: {
    width: width,
    height: height,
  }
});
class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.data = 0;
    
  }
  componentDidMount(){
    // speedTest.visual({maxTime: 5000}, (err, data) => {
    //   console.dir(data);
    // });
  }
  // handleMessage = (event) => {
  //   //webview中的html页面传过来的的数据在event.nativeEvent.data上
  //   console.log(event.nativeEvent.data);
  // }
  handleMessage = (evt) => {
      const message = JSON.parse(evt.nativeEvent.data)
      if (message.command === 'get info') {
          const nickname = message.payload.nickname
          // 得到了数据随你怎么办吧
          console.log(nickname, 'RN获取数据');
      }
  }

  //向html页面发送消息
  sendMessage() {
    // this.webview && this.webview.postMessage(++this.data);
    const data = {
      command: 'get info', // 表明意图
      payload: { // 表明内容
          property: 'nickname'
      }
  }
  this.webview.postMessage(JSON.stringify(data))
  }
  render() {
    let url = '../common/PostMessage.html';
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
        <TouchableHighlight onPress={() => {
                    this.sendMessage()
                }}><Text>发送数据到WebView</Text></TouchableHighlight>
        <WebView onMessage={this.handleMessage} source={require(url)} style={styles.webWrap} ref={webview => this.webview = webview}/>
        
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
