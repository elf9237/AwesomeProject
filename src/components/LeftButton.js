//@flow
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, WebView, Alert, ActivityIndicator } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';
import Toast from 'react-native-root-toast';
import { getUUID } from 'ywl/src/utils/utils';
import Acts from 'ywl/src/actions/actions';
import * as WeChat from 'react-native-wechat';
import type { MaccAuth } from 'ywl/src/types/types';
import { store } from 'ywl/src/store/store';
import { ShareModal, CommonWebView2, CommonWebView } from 'ywl/src/components/components';
import { Urls } from 'ywl/src/constants/constants';
import { getWebViewStorage } from 'ywl/src/components/WebViewStorage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { trackEvent } from 'ywl/src/utils/utils';
import { eventRecords } from 'ywl/src/constants/constants';
import Iconfont from 'ywl/src/components/Iconfont';

type Props = {
  navigation: NavigationScreenProp<void>,
};
type BtProps = {
  navigation: NavigationScreenProp<any>,
};
let WEB_URL = () => `${Urls.macc4}/admin/config/sellingPoint`;
class LeftButton extends React.PureComponent<BtProps> {
  _onLeftBackPress = () => {
    const { webViewIns, canBack } = getWebViewStorage();
    if (canBack && !!webViewIns) {
      webViewIns.goBack();
    } else {
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <TouchableOpacity style={styles.leftButton} onPress={this._onLeftBackPress}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
    );
  }
}

export default class SellPoint extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: '卖点',
      // headerStyle: styles.header,
      // headerTitleStyle: styles.headerTitle,
      headerLeft: <LeftButton navigation={navigation} />,
    };
  };
  constructor(props){
    super(props);
    this.state = {
      webUrl: '',
    };
  }
    
  
    componentDidMount = () => {
      const webUrl = WEB_URL();
      this.setState({ webUrl: webUrl });
      console.log(webUrl, 'webUrl');
    };
  
    //获取H5反馈事件
    _onMessage = e => {
      let data = e.nativeEvent.data;
      console.log(`in PoeCalculator _onMessage data=${data}`);
    //   if (data == 'showTip') {
    //     //this._setParams(true);
    //     this.props.navigation.setParams({ isShowTip: true });
    //   } else if (data == 'hideTip') {
    //     //this._setParams(false);
    //     this.props.navigation.setParams({ isShowTip: false });
    //   }
    };
  
    render() {
      const { webUrl } = this.state;
      return (
        <View style={styles.container}>
          {!!webUrl && <CommonWebView webUrl={webUrl} _onMessage={this._onMessage}  navigation={this.props.navigation}  navStateTitle={'卖点'}/>}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246, 246, 246)',
  },
  leftButton: {
    flex: 1,
    width: 50,
    justifyContent: 'center',
    paddingLeft: 14,
  },
});