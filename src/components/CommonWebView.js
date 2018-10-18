import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  WebView,
  Platform,
  TouchableOpacity,
  Alert,
  BackHandler,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';
import { LoadingModal } from 'ywl/src/components/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { setWebViewStorage, getWebViewStorage } from 'ywl/src/components/WebViewStorage';
import { Urls } from 'ywl/src/constants/constants';

const { width, height } = Dimensions.get('window');
//https://blog.csdn.net/sunshinezx8023/article/details/80702443
type Props = {
  _onBarCodeRead?: (e?: any) => void,
};

export default class CommonWebView extends React.Component<Props> {
  _onRefresh = () => {
    const { webViewIns } = getWebViewStorage();
    !!webViewIns && webViewIns.reload();
  };

  _renderNoresult = () => {
    return (
      <View style={styles.container}>
        <View style={styles.noResultImage}>
          <Image source={require('../screens/FindDev/images/noResult.png')} />
        </View>
        <View>
          <Text style={styles.noResultText}>无法访问，请联网后重试！</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.refeshBtn} onPress={this._onRefresh}>
            <Text style={styles.refreshTxt}>刷新</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  _renderLoading = () => {
    return <ActivityIndicator style={styles.loading} color="rgb(83, 135, 255)" size="large" />;
  };

  _onNavigationStateChange = navState => {
    // console.log('navState: ', navState);
    const webViewObj = {
      canBack: navState.canGoBack, //canGoBack 为true 表示可以web页后退， false 表示不能进行web页面后退
      navState: navState,
    };
    setWebViewStorage(webViewObj);

    const { navigation, navStateTitle } = this.props;
    if (navigation && navStateTitle) {
      navigation.setParams({
        showLeftButton: navState.canGoBack || (navState.loading && navState.title === navStateTitle),
      });
    }
  };

  _onMessage = e => {
    const { _onMessage } = this.props;
    _onMessage && _onMessage(e);
  };

  _injectedJavaScript = () => {
    const { _injectedJavaScript } = this.props;
    _injectedJavaScript && _injectedJavaScript();
  };

  render() {
    const { webUrl } = this.props;
    return (
      <WebView
        ref={refIns => {
          const webViewObj = {
            webViewIns: refIns,
          };
          setWebViewStorage(webViewObj);
        }}
        style={styles.container}
        source={{ uri: webUrl }}
        injectedJavaScript={this._injectedJavaScript()}
        renderLoading={this._renderLoading}
        startInLoadingState={true}
        renderError={this._renderNoresult}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={this._onMessage}
        onNavigationStateChange={this._onNavigationStateChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(246, 246, 246)',
  },
  // iosContainer: {
  //   marginTop: 24,
  // },
  noResultImage: {
    marginTop: 24.3,
    marginBottom: 51,
    justifyContent: 'center',
  },
  noResultText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 24,
    lineHeight: 30,
    color: 'rgb(74,74,74)',
    alignSelf: 'center',
  },
  refeshBtn: {
    width: 250,
    height: 45,
    backgroundColor: '#537bff',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 40,
  },
  refreshTxt: {
    color: '#fff',
  },
  loading: {
    marginTop: 20,
  },
});
